import Link from "next/link";
import voucher from "/pages/important-pages/images/voucher.jpeg";
import Image from "next/image";
import "/styles/services.css";
import logo from "/pages/important-pages/images/emily-logo.jpg";
import clothes from "/pages/important-pages/images/clothes.jpg";
import "/styles/footer.css";
import FooterPage from "../Footer";
import WardrobeStyling from "/pages/important-pages/images/wardrobe-styling.jpg";
import ColorAnalysis from "/pages/important-pages/images/color-analysis.jpg";
import LondonShopping from "/pages/important-pages/images/london-shopping.jpg";

// import RootLayout from "@component/app/layout";

export default function Services() {
  return (
    // <RootLayout>
    <div>
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

          <Link className="link" href="./blog/blog">
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

      <div className="services-big-container">
        <div className="picture-container">
          <Image
            alt="clothes"
            className="clothes-services-cover"
            src={clothes}
            width="100%"
            height="100%"
          />
        </div>
        <div className="intro-services">
          <h1 className="title-services"> Services</h1>

          <h2>
            Any of the following services can be combined to create a bespoke
            experience just right for you. Book any two personal styling, colour
            analysis or personal shopping appointments at the same time and
            receive a complementary copy of Shopped. Gift vouchers available
          </h2>
        </div>
        <div className="all-services">
          <div className="service">
            <h3 className="second-title">COLOUR ANALYSIS</h3>
            <div className="service-small-container">
              <Image
                alt="voucher"
                src={ColorAnalysis}
                width={250}
                height={250}
              />
              <h3 className="description">
                £1oo for up to 2 hours (includes a colour swatch for you to
                keep) Knowing which colours re the most flattering for you is
                the first step on the road to creating the perfect wardrobe.
                Wearing the right colours will help you look younger and more
                vibrant; you will notice the difference immediately and the
                compliments will flood in. Group sessions can also be arranged.
              </h3>
            </div>

            <a href="https://buy.stripe.com/14kaFW25h5dE4VOaEE">
              <button className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100">
                Buy
              </button>
            </a>
          </div>
          <div className="service">
            <h3 className="second-title">WARDROBE STYLING</h3>
            <div className="service-small-container">
              <Image
                alt="voucher"
                src={WardrobeStyling}
                width={250}
                height={250}
              />
              <h3 className="description">
                £90 an hour We tend to have an emotional attachment to our
                clothes which can make it hard to let go of pieces long past
                their shelf life or suitability - a personal stylist is an
                objective pair of eyes. I will help you identify what works best
                for your shape and which pieces you need for an accessible
                wardrobe. Together, we can create space for new pieces ensuring
                you have plenty of &quot;go-to&quot; outfits you know you look
                fabulous in.
              </h3>
            </div>

            <a href="https://buy.stripe.com/00g3du7pBcG673W002">
              <button className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100">
                Buy
              </button>
            </a>
          </div>
          <div className="service">
            <h3 className="second-title">PERSONAL SHOPPING TRIP</h3>
            <div className="service-small-container">
              <Image
                alt="voucher"
                src={LondonShopping}
                width={250}
                height={250}
              />
              <h3 className="description">
                £250 for 3 hours Whether you need a whole new wardrobe or a once
                in a lifetime showstopper for a special occasion, we will find
                it, whatever your budget. Comfortable shoes and coffee breaks a
                must...
              </h3>
            </div>

            <a href="https://buy.stripe.com/fZe3du7pB35w9c4aEH">
              <button className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100">
                Buy
              </button>
            </a>
          </div>
          <div className="Gift-vooucher">
            <p>
              A gift certificate makes the perfect gift for those who are
              difficult to shop for. Choose whatever denomination or service you
              prefer, there&apos;s no expiry date and they are valid for both
              in-person or online appointments. Click the button below to find
              out more.
            </p>
            <Image alt="voucher" src={voucher} width={100} height={100} />
          </div>
          <a href="https://buy.stripe.com/fZe3du7pB35w9c4aEH">
            <button className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100">
              Click HERE for further details
            </button>
          </a>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}
