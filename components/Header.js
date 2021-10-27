import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

// import styles
import styles from "../styles/Header.module.css";

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact us", link: "/contact" },
  { name: "Find us", link: "/find" },
];

function generateNav(Ps = []) {
  let links = Ps.map((page, i) => {
    return (
      <Link href={page.link} key={i}>
        <a>
          <li>{page.name}</li>|
        </a>
      </Link>
    );
  });

  return links;
}

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.navigation}>
        <ul>{generateNav(pages)}</ul>
      </nav>
      <div className={styles.banner}>
        <h1 className={styles.title}>Hello</h1>
        <p>welcome to the Mesfin ashenafi space saving furniture homepage</p>
      </div>
      <Link href="#gallery">
        <a className={styles.iconContainer}>
          <FaChevronDown size={70} />
        </a>
      </Link>
    </div>
  );
}

export default Header;
