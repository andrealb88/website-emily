import Link from "next/link";
import "/styles/about.css";
import Image from "next/image";
import emilyBackground from "/pages/important-pages/images/emily-half.jpg";
import logo from "/pages/important-pages/images/emily-logo.jpg";
import emilyAbout from "/pages/important-pages/emily.jpg";
import "/styles/footer.css";
import FooterPage from "../Footer";
import Header from "../Header";
import pinterest from "/pages/important-pages/images/pinterest.svg";
import linkedin from "/pages/important-pages/images/linkedin.svg";
import instagram from "/pages/important-pages/images/instagram.svg";

//import RootLayout from "@component/app/layout";

export default function About() {
  return (
    <div className="about-body">
      <nav className="nav-about">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </Link>
        <Image
          alt="women2"
          className="logo-header"
          src={logo}
          width="100%"
          height="100%"
        />

        <div className="group">
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
            PERSONAL STYLED SERVICES
          </Link>
        </div>
      </nav>
      {/* <RootLayout> */}
      <div className="about-container">
        <div className="picture-container">
          <Image
            alt="cover-emily"
            className="about-cover"
            src={emilyAbout}
            width="100%"
            height="100%"
          />
        </div>

        <div className="about-intro">
          <h1 className="about-me">About Emily Stott</h1>
          <h2 className="description-self">
            PERSONAL STYLIST,INFLUENCER AND SPEAKER
          </h2>
          <div className="text-about">
            <h3>
              `&quot;Looking and feeling confident about the way you look can
              make all the difference to how others perceive you. Your style is
              unique to you and by combining it with the most flattering colours
              and shapes, you really can look your best every single day.`&quot;
            </h3>
            <p className="sign">Emily</p>
          </div>

          <div className="about-emily">
            <Image
              alt="background-emily"
              className="emily-background"
              src={emilyBackground}
              width="100%"
              height="100%"
            />
            <div className="text-life">
              <p>
                Since training as a personal stylist ten years ago, I have
                styled hundreds of clients of all shapes, sizes and ages. I live
                in London with my son and my book &apos;Shopped&apos; detailing
                my own style journey, was published in 2016.
              </p>
              <p>
                I love nothing more than being presented with an overstuffed
                wardrobe that needs editing. As unlikely as it may sound,
                sorting through piles of clothes or shopping for hard working
                outfits is something I relish - however bad you think your
                wardrobe is, I&apos;ve not only been there myself, I&apos;ve
                seen worse! Be the loveliest possible you every day.
              </p>
            </div>
          </div>
          <div className="final-about">
            <p>
              Please do get in touch using the button below or call
              +447956359559 to find out more.
            </p>
            <button className="about-button">GET IN TOUCH</button>
          </div>
        </div>
      </div>
      <FooterPage />
      {/* <footer className="final">
        <h3 className="last">
          Emily Stott | Fasion stylist,influencer and speaker
        </h3>
        <h3 className="follow">Follow me</h3>
        <div className="svg-bottom">
          <div className="circle">
            <a
              href=" https://www.instagram.com/emily_styled/?hl=en"
              target="_blank"
            >
              <Image
                className="instagram"
                alt="ínstagram"
                src={instagram}
                width={60}
                height={60}
              />
            </a>
            <a
              href=" https://www.linkedin.com/in/emily-stott-81784b6a/?originalSubdomain=uk "
              target="_blank"
            >
              <Image
                className="linkedin"
                alt="linkedin"
                src={linkedin}
                width={60}
                height={60}
              />
            </a>
            <a
              href=" https://www.linkedin.com/in/emily-stott-81784b6a/?originalSubdomain=uk "
              target="_blank"
            >
              <Image
                className="pinterest"
                alt="pinterest"
                src={pinterest}
                width={60}
                height={60}
              />
            </a>
          </div>
          <p>Copyright @ 2024 - All rights reserved</p>
        </div>
      </footer> 
      {/* </RootLayout> */}
    </div>
  );
}
