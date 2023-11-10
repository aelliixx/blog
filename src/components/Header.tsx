import React from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h2><Link href={"/"} style={{textDecoration: "none"}}>aelliixx blog_</Link></h2>
                <Link href={"/articles"}>Articles</Link>
                <Link href={"https://github.com/aelliixx"}>GitHub</Link>
                <Link href={"https://aelliixx.com"}>Portfolio</Link>
                {/*<Link href={"/"}>Personal Projects</Link>*/}
            </nav>
        </header>
    );
}

export default Header;
