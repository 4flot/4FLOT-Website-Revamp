import React from "react";

import styles from "./HeaderBar.module.css";

export const HeaderBar = () => {
  return (
    <div className={styles.headerBar}>
      <div className={styles.logo}>
        <img className={styles.logo} src="/Color=Default.svg" alt="Default Logo"></img>
      </div>
      <div className={styles.frame85}>
        <span className={styles.aboutUs}>About Us</span>
        <span className={styles.getInvolved}>Get Involved</span>
        <span className={styles.ourImpact}>Our Impact</span>
        <div className={styles.button}>
          <div className={styles.opacity}>
            <button className={styles.innerButton}>
              <span className={styles.buttonBody}>Donate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
