import Link from "next/link";

export default function Services() {
  return (
    <div>
      <nav>
        <div className="arrow">
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
                fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </Link>
        </div>
        <div className="group">
          <Link href="/">Home</Link>
          <Link href="./About">About</Link>

          <Link href="./blog">Blog</Link>

          <Link href="./shop">Shop</Link>

          <Link href="./services">Personal styled Services</Link>
        </div>
      </nav>
      <h1>This is the Services page</h1>
      <h2>
        Any of the following services can be combined to create a bespoke
        experience just right for you. Book any two personal styling, colour
        analysis or personal shopping appointments at the same time and receive
        a complementary copy of Shopped. Gift vouchers available
      </h2>
      <div className="services">
        <div className="color-analysis">
          <h3>COLOUR ANALYSIS</h3>
          <h3 className="description">
            £1oo for up to 2 hours (includes a colour swatch for you to keep)
            Knowing which colours re the most flattering for you is the first
            step on the road to creating the perfect wardrobe. Wearing the right
            colours will help you look younger and more vibrant; you will notice
            the difference immediately and the compliments will flood in. Group
            sessions can also be arranged.
          </h3>
        </div>
        <div className="wardorbe-styling">
          <h3>WARDROBE STYLING</h3>
          <h3 className="description">
            £90 an hour We tend to have an emotional attachment to our clothes
            which can make it hard to let go of pieces long past their shelf
            life or suitability - a personal stylist is an objective pair of
            eyes. I will help you identify what works best for your shape and
            which pieces you need for an accessible wardrobe. Together, we can
            create space for new pieces ensuring you have plenty of "go-to"
            outfits you know you look fabulous in.
          </h3>
        </div>
        <div className="personal-shopping">
          <h3>PERSONAL SHOPPING TRIP</h3>
          <h3 className="description">
            £250 for 3 hours Whether you need a whole new wardrobe or a once in
            a lifetime showstopper for a special occasion, we will find it,
            whatever your budget. Comfortable shoes and coffee breaks a must...
          </h3>
        </div>
      </div>
    </div>
  );
}
