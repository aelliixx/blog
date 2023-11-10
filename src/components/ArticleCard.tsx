import React from "react";
import {Post} from "contentlayer/generated";
import {format, parseISO} from "date-fns"
import styles from "@/styles/article.module.css";
import Link from "next/link";

function ArticleCard(article: Post) {
    return (
        <Link href={article.url} className={styles.card}>
            <div className={styles.card__title}>
                <h3>{article.title}</h3>
                <time dateTime={article.date}>{format(parseISO(article.date), "dd LLLL, yyyy")}</time>
            </div>
            <p className={styles.card__preview}>{article.body.raw.substring(0, 256)}...</p>
            {
                article.tags?.length && article.tags.length > 0 &&
                <div className={styles.card__tags}>
                    <p>Tags:</p>
                    {article.tags?.map((tag, index) => <p key={index}>{tag}</p>)}
                </div>
            }
        </Link>
    );
}

export default ArticleCard;
