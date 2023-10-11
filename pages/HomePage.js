import Image from "next/image";
import "/styles/HomePage.css";
import womenImage from "/pages/important-pages/women-backwards.jpg";

export default function HomePage() {
  return (
    <div className="home">
      <div className="title">
        <h1 className="name">EMILY STOTT</h1>
      </div>
      <div className="colour">
        <Image className="emily" src={womenImage} width={500} height={500} />
      </div>
      <div className="intro">
        <h3>
          Looking and feeling confident about the way you look can make all the
          difference to how others perceive you. Your style is unique to you and
          by combining it with the most flattering colours and shapes, you
          really can look your best every single day. As a personal stylist,
          colour analyst and personal shopper, I believe our sartorial choices
          and personal style are important; clothes should be fun but they
          should also be a positive reflection of who we are. Most of us have
          wardrobes stuffed with clothes, many of which don't get worn. By
          identifying what works best for your shape, colouring and lifestyle
          and refining the contents of your wardrobe into a workable collection,
          having nothing to wear will be a thing of the past. You will save time
          and money and gain confidence, and others will notice. That's a
          promise.
        </h3>
      </div>
    </div>
  );
}
