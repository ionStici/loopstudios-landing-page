import React from "react";
import styles from "./OurCreations.module.scss";

import deep from "./../images/mobile/image-deep-earth.jpg";
import night from "./../images/mobile/image-night-arcade.jpg";
import soccer from "./../images/mobile/image-soccer-team.jpg";
import grid from "./../images/mobile/image-grid.jpg";
import above from "./../images/mobile/image-from-above.jpg";
import pocket from "./../images/mobile/image-pocket-borealis.jpg";
import curiosity from "./../images/mobile/image-curiosity.jpg";
import fisheye from "./../images/mobile/image-fisheye.jpg";

import deepDesktop from "./../images/desktop/image-deep-earth.jpg";
import nightDesktop from "./../images/desktop/image-night-arcade.jpg";
import soccerDesktop from "./../images/desktop/image-soccer-team.jpg";
import gridDesktop from "./../images/desktop/image-grid.jpg";
import aboveDesktop from "./../images/desktop/image-from-above.jpg";
import pocketDesktop from "./../images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "./../images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "./../images/desktop/image-fisheye.jpg";

const Creation = function (props) {
    return (
        <figure className={styles.imgWrapper}>
            <picture>
                <source srcSet={props.imgMobile} media="(max-width: 768px)" />
                <img
                    className={styles.img}
                    src={props.imgDesktop}
                    alt={props.title}
                />
            </picture>
            <figcaption className={styles.imgCaption}>{props.title}</figcaption>
        </figure>
    );
};

export const OurCreations = function () {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.h2}>Our creations</h2>
                <a className={`${styles.link} ${styles.linkTop}`} href=".">
                    See all
                </a>
            </div>

            <div className={styles.wrapper}>
                <Creation
                    title="Deep earth"
                    imgMobile={deep}
                    imgDesktop={deepDesktop}
                />
                <Creation
                    title="Night arcade"
                    imgMobile={night}
                    imgDesktop={nightDesktop}
                />
                <Creation
                    title="Soccer team VR"
                    imgMobile={soccer}
                    imgDesktop={soccerDesktop}
                />
                <Creation
                    title="The grid"
                    imgMobile={grid}
                    imgDesktop={gridDesktop}
                />
                <Creation
                    title="From up above VR"
                    imgMobile={above}
                    imgDesktop={aboveDesktop}
                />
                <Creation
                    title="Pocket borealis"
                    imgMobile={pocket}
                    imgDesktop={pocketDesktop}
                />
                <Creation
                    title="The curiosity"
                    imgMobile={curiosity}
                    imgDesktop={curiosityDesktop}
                />
                <Creation
                    title="Make it fisheye"
                    imgMobile={fisheye}
                    imgDesktop={fisheyeDesktop}
                />
            </div>

            <a className={`${styles.link} ${styles.linkBottom}`} href=".">
                See all
            </a>
        </section>
    );
};
