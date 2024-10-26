import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./Header.module.css";
import Image from "next/image";
import HeaderBackground from "./Header-background";

import NavLink from "./NavLink";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logoImg} priority alt="A plate with a food on it" />{" "}
          NextLevel food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              {/* <Link
                href={"/meals"}
                className={
                  path.startsWith("/meals") ? styles.active : undefined
                }
              >
                Browse Meals
              </Link> */}
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              {/* <Link
                href={"/community"}
                className={
                  path.startsWith("/community") ? styles.active : undefined
                }
              >
                Community
              </Link> */}
              <NavLink href={"/community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
        {/* <p></p>
      <p>
        <Link href={"/meals/share"}>Share</Link>
      </p>
      <p></p> */}
      </header>
    </>
  );
}

export default Header;
