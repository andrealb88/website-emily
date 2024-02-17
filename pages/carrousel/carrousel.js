import "/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import { items } from "./items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import emilyLogo from "/pages/important-pages/images/emily-logo.jpg";

// export default function ResponsiveCarousel() {
//   const { responsive } = items;
//   return (
//     <div className="carousel-container">
//       {/* <Image
//         alt="background-emily"
//         className="emily-logo"
//         src={emilyLogo}
//         width="30px"
//         height="30px"
//       /> */}
//       <Carousel
//         showArrows={true}
//         showIndicators={true}
//         infiniteLoop={true}
//         dynamicHeight={false}
//         className="carousel"
//       >
//         {responsive.map((items) => (
//           <div className="carousel-full">
//             <div key={items.id}>
//               <div className="carousel-texts">
//                 <p className="carousel-text-1">&quot;{items.text}&quot;</p>
//                 <p className="carousel-text-2">{items.text1}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
export default function ResponsiveCarousel() {
  const { responsive } = items;

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className="carousel"
      >
        {responsive.map((item) => (
          // Apply the key directly to the outermost JSX element
          <div key={item.id} className="carousel-full">
            <div>
              <div className="carousel-texts">
                <p className="carousel-text-1">&quot;{item.text}&quot;</p>
                <p className="carousel-text-2">{item.text1}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
