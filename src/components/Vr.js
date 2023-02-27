import React from "react";
import styles from "./Vr.module.scss";
import vrImgMobile from "./../images/mobile/image-interactive.jpg";
import vrImgDesktop from "./../images/desktop/image-interactive.jpg";

export const Vr = function () {
    return (
        <section className={styles.vr}>
            <div className={styles.imgWrapper}>
                <picture>
                    <source srcSet={vrImgMobile} media="(max-width: 768px)" />
                    <img className={styles.imgVr} src={vrImgDesktop} alt="" />
                </picture>
            </div>

            <div className={styles.contentWrapper}>
                <h2 className={styles.h2}>The leader in interactive VR</h2>
                <p className={styles.p}>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </section>
    );
};
