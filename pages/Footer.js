import instagram from "/pages/important-pages/images/instagram.svg";
import Image from "next/image";
//import envelope from "./envelope.svg";
import "/styles/footer.css";
import pinterest from "/pages/important-pages/images/pinterest.svg";
import linkedin from "/pages/important-pages/images/linkedin.svg";

export default function FooterPage() {
  return (
    <footer className="final">
      <h3 className="last">
        Emily Stott | Fashion stylist,influencer and speaker
      </h3>
      <h3>Follow me</h3>
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
      </div>
    </footer>
  );
}
