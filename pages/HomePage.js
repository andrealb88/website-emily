import Image from "next/image";
import "/styles/HomePage.css";
import womenImage from "/pages/important-pages/emily-stott.jpg";
import emily from "/pages/important-pages/emily.jpg";

export default function HomePage() {
  return (
    <div className="home">
      <div className="title"></div>
      <Image
        alt="women2"
        className="emily"
        src={emily}
        width="100%"
        height="90%"
      />

      {/*    <div className="colour">
         <Image
          alt="women"
          className="emily"
          src={womenImage}
          width={450}
          height={550}
        />
       </div> */}

      <div className="intro">
        <h2 className="phrase">
          "People will stare, make it worth their while"
        </h2>
        {/* <h3>
          Looking and feeling confident about the way you look can make all the
        difference to how others perceive you. Your style is unique to you and
          by combining it with the most flattering colours and shapes, you
          really can look your best every single day.
        </h3> */}
        <h3 className="intro-1">
          As a personal stylist, colour analyst and personal shopper, I believe
          our sartorial choices and personal style are important; clothes should
          be fun but they should also be a positive reflection of who we are.
          Most of us have wardrobes stuffed with clothes, many of which
          don&apos;t get worn.
        </h3>
        <h3 className="intro-2">
          By identifying what works best for your shape, colouring and lifestyle
          and refining the contents of your wardrobe into a workable collection,
          having nothing to wear will be a thing of the past. You will save time
          and money and gain confidence, and others will notice. That&apos;s a
          promise.
        </h3>
      </div>
    </div>
  );
}
