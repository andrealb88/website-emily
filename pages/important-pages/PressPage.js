import "/styles/PressPage.css";
import Link from "next/link";
import Image from "next/image";
import YouTube from "react-youtube";
import newspaper from "/pages/important-pages/images/newspaper1.jpg";
import FooterPage from "../Footer";
import logo from "/pages/important-pages/images/emily-logo.jpg";

// import RootLayout from "@component/app/layout";

export default function PressPage() {
  return (
    // <RootLayout>
    <div className="press-body">
      <nav className="service-nav">
        <Image
          alt="women2"
          className="logo-header"
          src={logo}
          width="100%"
          height="100%"
        />
        <div className="all-options">
          <Link className="link" href="/">
            HOME
          </Link>
          <Link className="link" href="./About">
            ABOUT
          </Link>

          <Link className="link" href="./blog">
            BLOG
          </Link>

          <Link className="link" href="./PressPage">
            PRESS
          </Link>

          <Link className="link" href="./services">
            PERSONAL STYLED SERVCES
          </Link>
        </div>
      </nav>

      <div className="Press-intro">
        <h2 className="title-press"> In the Press</h2>
        <div className="press-container">
          <div className="media-full">
            <div className="media-1">
              <a href="https://mobidrive.com/sharelink/p/7gax9YIE9RVmvjou1UkGqz2ZseeR5swugvqB1U8en6rg">
                <Image
                  alt="newspaper-article-1"
                  src={newspaper}
                  width={635}
                  height={355}
                />
              </a>
            </div>
            <div className="media-2">
              <YouTube videoId={"PRKYJ4NVVUU"} />
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
    // </RootLayout>
  );
}
