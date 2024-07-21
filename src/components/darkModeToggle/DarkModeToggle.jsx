"use client";
import { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext.js";

export default function DarkModeToggle() {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌚</div>
      <div
        style={mode === "light" ? { right: "2px" } : { left: "2px" }}
        className={styles.switcher}
      />
    </div>
  );
}
