"use client";

import React, { useEffect, useState } from "react";

import { getPageData } from "../../../api/pageeditor";
import { generatePageMap } from "../../../app/admin/util/pageeditUtil";
import BackgroundHeader from "../../../components/BackgroundHeader";
import WhiteCard from "../../../components/WhiteCard";
import LoadingSpinner from "../../../components/admin/LoadingSpinner";

import styles from "./page.module.css";

export default function Involved() {
  const [pageMap, setPageMap] = useState<Map<string, string | string[]>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPageData("involved")
      .then((response) => {
        if (response.success) setPageMap(generatePageMap(response.data));
        else throw new Error(response.error);
      })
      .catch((error) => {
        alert(error);
      });
    setLoading(false);
  }, []);

  if (loading || !pageMap) {
    return <LoadingSpinner />;
  }

  return (
    <main className={styles.page}>
      <div className={styles.backgroundImageContainer}>
        <BackgroundHeader
          backgroundImageURIs={pageMap.get("Header Image Carousel") as string[]}
          header=""
          title="Get Involved"
          description={pageMap.get("Subtitle") as string}
        />
      </div>
      <div className={styles.cardsBackground}></div>
      <div className={styles.whiteCardsContainer}>
        <div className={styles.cards}>
          <WhiteCard
            imageUrl="/cal.svg"
            buttonUrl="/upcoming-events"
            buttonText="Learn More"
            title="Upcoming Events"
            description={pageMap.get("Events Subtitle") as string}
          />
          <WhiteCard
            imageUrl="/group.svg"
            buttonUrl="/donations"
            buttonText="Learn More"
            title="Donate"
            description={pageMap.get("Donations Subtitle") as string}
          />
        </div>
      </div>
    </main>
  );
}
