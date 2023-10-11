import Link from "next/link";

export default function Blog() {
  return (
    <div className="blog-body">
      <nav>
        <div className="arrow">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-square"
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
      <h1>Styling Blog</h1>
      <div className="blog-1">
        <p> Your 2023 Wardrobe</p>
        <p>
          As a personal stylist I spend a lot of time thinking about clothes.
          Mostly it&apos;s other people&apos;s sartorial challenges that fill my
          head - I...
        </p>
      </div>
      <div className="blog-2">
        <p>You Too Can Wear Yellow!</p>
        <p>
          If the mere utterance of the word yellow strikes fear into your heart
          then rest assured you are not alone. Yellow comes in many guises...
        </p>
      </div>
      <div className="blog-3"></div>
    </div>
  );
}
