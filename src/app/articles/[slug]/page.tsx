import React from "react";
import {format, parseISO} from "date-fns"
import {allPosts} from "contentlayer/generated"
import styles from "@/styles/article.module.css"
import Link from "next/link";

export const generateStaticParams = async () => allPosts.map((post) => ({slug: post._raw.flattenedPath}))

export const generateMetadata = ({params}: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return {title: post.title}
}

function Article({params}: { params: { slug: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

    return (
        <main className={styles.main}>
            <Link href={"/articles"}>Back to articles</Link>
            <article className={styles.article}>
                <div className={styles.article__header}>
                    <time dateTime={post.date}>
                        {format(parseISO(post.date), 'd LLLL, yyyy')}
                    </time>
                    <h1 className={styles.article__title}>{post.title}</h1>
                    <div className={styles.article__tags}>
                        <p>Tags:</p>
                        {post.tags?.map((tag, index) => <Link key={index} href={`/articles?tag=${tag}`}>{tag}</Link>)}
                    </div>
                </div>
                <div className={styles.article__body} dangerouslySetInnerHTML={{__html: post.body.html}}/>
            </article>
        </main>
    )
}

export default Article;
