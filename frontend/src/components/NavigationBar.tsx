"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
<<<<<<< HEAD
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [activePageEditor, setActivePageEditor] = useState<string>("");
=======
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard");
>>>>>>> main

  /**
   * Upon page load, display correct text for navigation bar
   * depending on website url
   */
  useEffect(() => {
    const handleLoad = () => {
      if (typeof window !== "undefined") {
<<<<<<< HEAD
        const url = window.location.pathname;
        if (url === "/admin/dashboard") {
          return "Dashboard";
        } else if (url === "/admin/eventcreator") {
          return "Event Creator";
        } else if (url.startsWith("/admin/pageeditor")) {
          // For Page Editor subpages
          if (url.endsWith("home")) {
            setActivePageEditor("Home");
          } else if (url.endsWith("about")) {
            setActivePageEditor("About Us");
          } else if (url.endsWith("mission")) {
            setActivePageEditor("Our Mission");
          } else if (url.endsWith("team")) {
            setActivePageEditor("Our Team");
          } else if (url.endsWith("contact")) {
            setActivePageEditor("Contact Us");
          } else if (url.endsWith("involved")) {
            setActivePageEditor("Get Involved");
          } else if (url.endsWith("events")) {
            setActivePageEditor("Upcoming Events");
          }
          return "Page Editor";
        } else if (url === "/admin/newslettercreator") {
          return "Newsletter Creator";
        } else if (url === "/admin/mailinglist") {
          return "Mailing List";
        } else if (url === "/admin/settings") {
          return "Settings";
        } else {
          return url;
=======
        if (window.location.pathname === "/admin/dashboard") {
          return "Dashboard";
        } else if (window.location.pathname === "/admin/event-creator") {
          return "Event Creator";
        } else if (window.location.pathname === "/admin/page-editor") {
          return "Page Editor";
        } else if (window.location.pathname === "/admin/newsletter-creator") {
          return "Newsletter Creator";
        } else if (window.location.pathname === "/admin/mailing-list") {
          return "Mailing List";
        } else if (window.location.pathname === "/admin/settings") {
          return "Settings";
        } else {
          return "";
>>>>>>> main
        }
      } else {
        return "Dashboard";
      }
    };
    setActiveMenu(handleLoad());
  }, []); // Run only once on initial render

  /* Upon clicking purple sidebar to new page, update navigation bar */
  const handleOnClick = (menuDiv: string) => {
    setActiveMenu(menuDiv);
<<<<<<< HEAD
    setActivePageEditor("");
=======
>>>>>>> main
  };
  return (
    <main>
      <div className={styles.headerBar}>
        <div className={styles.title}>
          <p>{activeMenu}</p>
<<<<<<< HEAD
          {activeMenu !== "Dashboard" && activePageEditor === "" && (
=======
          {activeMenu !== "Dashboard" && (
>>>>>>> main
            <div className={styles.pageDesc}>
              <p>Dashboard &gt;</p>
              <p style={{ font: "var(--font-body-bold)", color: "var(--color-primary-purple)" }}>
                {activeMenu}
              </p>
            </div>
          )}
<<<<<<< HEAD
          {activeMenu === "Page Editor" && activePageEditor !== "" && (
            <div className={styles.pageDesc}>
              <p>Dashboard &gt; Page Editor &gt;</p>
              <p style={{ font: "var(--font-body-bold)", color: "var(--color-primary-purple)" }}>
                {activePageEditor}
              </p>
            </div>
          )}
=======
>>>>>>> main
        </div>
        <div className={styles.user}>
          <Image src={"/sampleUserPhoto.svg"} alt="userImage" width={36} height={36}></Image>
          <p>John Doe</p>
          <Image src={"/ic_caretdown.svg"} alt="upArrow" width={24} height={24}></Image>
        </div>
      </div>
      <div className={styles.navBar}>
        <Image
          width={168.25}
          height={59.69}
          src="/footerLogo.svg"
          alt="4 Future Leaders of Tomorrow Logo"
        />
        <div className={styles.menu}>
          <div className={activeMenu === "Dashboard" ? styles.menuActive : styles.menuDiv}>
            <Image width={18} height={18} src="/dashboardIcon.svg" alt="Dashboard Icon" />
            <Link
              href="/admin/dashboard"
              onClick={() => {
                handleOnClick("Dashboard");
              }}
            >
              Dashboard
            </Link>
          </div>
          <div className={activeMenu === "Event Creator" ? styles.menuActive : styles.menuDiv}>
            <Image width={18} height={18} src="/calendarIcon.svg" alt="Calendar Icon" />
            <Link
<<<<<<< HEAD
              href="/admin/eventcreator"
=======
              href="/admin/event-creator"
>>>>>>> main
              onClick={() => {
                handleOnClick("Event Creator");
              }}
            >
              Event Creator
            </Link>
          </div>
          <div className={activeMenu === "Page Editor" ? styles.menuActive : styles.menuDiv}>
            <Image width={18} height={18} src="/pageIcon.svg" alt="Page Icon" />
            <Link
<<<<<<< HEAD
              href="/admin/pageeditor"
=======
              href="/admin/page-editor"
>>>>>>> main
              onClick={() => {
                handleOnClick("Page Editor");
              }}
            >
              Page Editor
            </Link>
          </div>
          <div className={activeMenu === "Newsletter Creator" ? styles.menuActive : styles.menuDiv}>
            <Image width={18} height={18} src="/newsletterIcon.svg" alt="Newsletter Icon" />
            <Link
<<<<<<< HEAD
              href="/admin/newslettercreator"
=======
              href="/admin/newsletter-creator"
>>>>>>> main
              onClick={() => {
                handleOnClick("Newsletter Creator");
              }}
            >
              Newsletter Creator
            </Link>
          </div>
          <div className={activeMenu === "Mailing List" ? styles.menuActive : styles.menuDiv}>
            <Image width={18} height={18} src="/mailIcon.svg" alt="Mail Icon" />
            <Link
<<<<<<< HEAD
              href="/admin/mailinglist"
=======
              href="/admin/mailing-list"
>>>>>>> main
              onClick={() => {
                handleOnClick("Mailing List");
              }}
            >
              Mailing List
            </Link>
          </div>
          <div className={activeMenu === "Settings" ? styles.menuActive : styles.menuDiv}>
            <Image width={18} height={18} src="/settingsIcon.svg" alt="Settings Icon" />
            <Link
              href="/admin/settings"
              onClick={() => {
                handleOnClick("Settings");
              }}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NavigationBar;
