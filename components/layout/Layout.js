import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="https://github.com/zahramortzv">zahramortzv</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href="https://github.com/zahramortzv" rel="noreferred">zahramortzv</a> |
                Next.js project about Food  &copy;
            </footer>
        </>
    )
}

export default Layout