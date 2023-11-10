import React from "react";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import styles from "@/styles/page.module.css";
import ArticleCard from "@/components/ArticleCard";

function Articles({searchParams}: {
    searchParams?: { [tag: string]: string | undefined };
}) {
    // If we have search params, filter articles by tag
    const articles = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).filter(
        (article) => {
            console.log(searchParams?.tag)
            if (!searchParams || !searchParams.tag)
                return true;
            const tags = article.tags;
            if (!tags)
                return false;
            if (tags.find((tag) => tag === searchParams.tag))
                return true;
        }
    );

    return (
        <main className={styles.main}>
            <section className={styles.articleList}>
                <h2>All articles:</h2>
                {/*<p>Search: {searchParams}</p>*/}
                {articles.map((article, idx) => (
                    <ArticleCard key={idx} {...article}/>
                ))}
            </section>
        </main>
    )
}

export default Articles;
