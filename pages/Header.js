import "/styles/header.css";
import Image from "next/image";
import Link from "next/link";
import logo from "/pages/important-pages/images/emily-logo.jpg";

function Header() {
  return (
    <header>
      <Image
        alt="women2"
        className="logo-header"
        src={logo}
        width="100%"
        height="100%"
      />
      <nav className="nav-header">
        <Link href="/">HOME </Link>

        <Link href="./important-pages/About">ABOUT</Link>

        <Link href="./important-pages/blog">BLOG</Link>

        <Link href="./important-pages/PressPage">PRESS</Link>

        <Link href="./important-pages/services">PERSONAL STYLED SERVICES</Link>
      </nav>
    </header>
  );
}

export default Header;
