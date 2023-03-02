import styles from "./Footer.module.scss";

import logo from "./../images/logo.svg";
import fb from "./../images/icon-facebook.svg";
import tw from "./../images/icon-twitter.svg";
import pin from "./../images/icon-pinterest.svg";
import ins from "./../images/icon-instagram.svg";

export const Footer = function () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.topBox}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <ul className={styles.ul_links}>
                        <li>
                            <a className={styles.link} href=".">
                                About
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href=".">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href=".">
                                Events
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href=".">
                                Products
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href=".">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.bottomBox}>
                    <ul className={styles.ul_icons}>
                        <li>
                            <img src={fb} alt="" />
                        </li>
                        <li>
                            <img src={tw} alt="" />
                        </li>
                        <li>
                            <img src={pin} alt="" />
                        </li>
                        <li>
                            <img src={ins} alt="" />
                        </li>
                    </ul>
                    <p className={styles.copyright}>
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
