// export default function Header() {
//   return <h1>This is the Header page</h1>;
// }

// Header.js
import "/styles/header.css";
import Image from "next/image";
import Link from "next/link";
import logo from "/pages/important-pages/logo2.jpg";
function Header() {
  return (
    <header>
      <Image
        alt="women2"
        className="logo-header"
        src={logo}
        width="100%"
        height="90%"
      />
      <nav>
        <Link href="/">Home</Link>

        <Link href="important-pages/About">About</Link>

        <Link href="important-pages/blog">Blog</Link>

        <Link href="important-pages/shop">Shop</Link>

        <Link href="important-pages/services">Personal styled Services</Link>
      </nav>
    </header>
  );
}

export default Header;
