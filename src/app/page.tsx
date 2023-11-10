import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {compareDesc} from "date-fns";
import {allPosts} from 'contentlayer/generated';
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
    const articles = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3);
    return (
        <main className={styles.main}>
            <section className={styles.articleList}>
                <h2>Recent articles:</h2>
                {articles.map((article, idx) => (
                    <ArticleCard key={idx} {...article}/>
                ))}
            </section>
        </main>
    )
}
