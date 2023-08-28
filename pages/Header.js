// export default function Header() {
//   return <h1>This is the Header page</h1>;
// }

// Header.js

import Link from "next/link";
function Header() {
  return (
    <header>
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
