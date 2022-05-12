import logo from "../../public/favicon.png";
import Image from "next/image";
import Link from "next/link";

import styles from "../Layout/index.module.scss";

const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.wrapper__nav}>
                <Link href="/">
                    <a className={styles.wrapper__link}>
                        <Image src={logo} width="50" height="50" />

                    </a>
                </Link>
                <Link href="/messages"><a className={styles.wrapper__link}>Messages</a></Link>
            </nav>

            {children}

            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}
export default Layout;