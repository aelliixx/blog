'use client';

import React from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import {format, parseISO} from "date-fns";

function Footer() {
    const [date] = React.useState(new Date());
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__body}>
                <p className={styles.copyright}>(c) <time dateTime={date.toString()}>{format(parseISO(date.toISOString()), "yyyy")}</time>
                    Donatas Mockus
                </p>
                <Link href={"#"}>Back to top</Link>
            </div>
        </footer>
    );
}

export default Footer;
