"use client";
// Admin Page Editor landing page
import { useEffect, useState } from "react";

import { getRecord } from "../../../api/records";
import PageEditorCard from "../../../components/PageEditorCard";

import styles from "./page.module.css";

export default function PageEditorDashboard() {
  const [lastUpdated, setLastUpdated] = useState<Record<string, string>>({});

  useEffect(() => {
    const cards = ["home", "about", "involved", "impact"];
    for (const card of cards) {
      try {
        getRecord(card)
          .then((record) => {
            if (record.success) {
              setLastUpdated((prevLastUpdated) => ({
                ...prevLastUpdated,
                [card]: record.data.date,
              }));
            } else {
              alert(record.error);
            }
          })
          .catch((error) => {
            alert(error);
          });
      } catch (error) {
        console.error(`Error fetching last updated date for ${card}:`, error);
      }
    }
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.gridContainer}>
        <PageEditorCard
          imageURI="/impact_bg.png"
          url="/page-editor/home"
          title="Home"
          last_updated={lastUpdated.home ?? ""}
        />
        <PageEditorCard
          imageURI="/impact_bg.png"
          url="/page-editor/about"
          title="About Us"
          last_updated={lastUpdated.about ?? ""}
        />
        <PageEditorCard
          imageURI="/impact_bg.png"
          url="/page-editor/involved"
          title="Get Involved"
          last_updated={lastUpdated.involved ?? ""}
        />
        <PageEditorCard
          imageURI="/impact_bg.png"
          url="/page-editor/impact"
          title="Our Impact"
          last_updated={lastUpdated.impact ?? ""}
        />
      </div>
    </main>
  );
}
