import Link from "next/link";
// import arrow from "./arrow-left-square.svg";

export default function About() {
  return (
    <div className="about-body">
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
                fillRule="evenodd"
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

      <h1>About Emily</h1>
      <p>
        I am a personal stylist, writer and mum based in London and my book
        Shopped was published in 2016. I started out as an actress which quickly
        taught me the importance of image. Although I didn&apos;t have much
        confidence in those days, one thing I did know was how to &quot;dress
        the part&quot;. Through trial and error (some of it, painfully
        embarrassing) and my training as a personal stylist, I discovered how
        dressing for your shape and wearing the right colours can make all the
        difference to your confidence and consequently how others see you. We
        might as well be the best version of ourselves, whatever age, whatever
        size. By putting together an accessible wardrobe suitable for your
        lifestyle and shape, you will save time, money and space. I relish an
        overstuffed wardrobe and can advise on how to work with what you have,
        what to do away with (if that&apos;s your goal) and what to do with
        unwanted pieces. However bad you think it&apos;s become, I&apos;ve not
        only been there myself, I&apos;ve seen worse! Be the loveliest possible
        you every day. Emily
      </p>
    </div>
  );
}
