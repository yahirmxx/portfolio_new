import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("Navbar/close.png")
              : getImageUrl("Navbar/menu.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/dev">Desarrollo</a>
          </li>
          <li>
            <a href="/video">Video</a>
          </li>
          <li>
            <a href="/design">Diseño</a>
          </li>
          <li>
            <a href="/audio">Audio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
