import "/styles/TestimonialsPage.css";
import ResponsiveCarousel from "./carrousel/carrousel.js";

import { useEffect } from "react";

export default function TestimonialPage() {
  // const slides = [];

  // useEffect(() => {
  //   // Call the function to get the testimonial divs array
  //   const testimonialArray = getTestimonialDivs();
  //   console.log(testimonialArray);
  // }, []);

  // function getTestimonialDivs() {
  //   const testimonialDivs = [];

  //   for (let i = 1; i <= 6; i++) {
  //     const divId = `testimonial-${i}`;
  //     const divElement = document.querySelector(`.${divId}`);

  //     if (divElement) {
  //       testimonialDivs.push(divElement);
  //     }
  //   }

  //   return testimonialDivs;
  // }

  return (
    <div className="testimonial-container">
      <div className="home-inner">
        <h1 className="title-testimonials">Happy Clients</h1>
        <ResponsiveCarousel />
      </div>
      {/* <div className="testimonials">
        <div className="part-a">
          <div className="testimonial-1">
            &quot;Emily spent three hours with me and my cluttered wardrobe. I
            hadn&apos;t updated my look since before having my daughter and
            Emily helped me with shapes so I now have a much better idea of what
            looks good on me. I took three sacks of clothes to the charity shop
            afterwards! Friends have noticed the difference; it is easier
            choosing what to wear each day, and I feel more confident.&quot; -
            NATALIE
          </div>
          <div className="testimonial-2">
            &quot;I was at a low ebb as a significant birthday approached and
            feeling out of shape I covered myself up with shapeless black
            clothes. Emily gently steered me towards more flattering colours and
            cuts and although I was anxious at first I&apos;ve now got lots of
            outfits I know make me look younger and slimmer!&quot; - ANNE
          </div>
          <div className="testimonial-3">
            &quot;Since having my &apos;colours done&apos; with Emily I avoid
            black and try to invest in those shades which flatter and enhance.
            I&apos;ve noticed I get more compliments and was even asked by one
            friend if I&apos;d had work done! &quot; - MONIQUE
          </div>
        </div>

        <div className="part-b">
          <div className="testimonial-4">
            &quot;Emily has picked out some great options for what I&apos;m
            trying to achieve with my look. She has a great eye.&quot; - JACK
          </div>
          <div className="testimonial-5">
            &quot;A styling session with Emily is fun and saves you money
            because you will never make any more fashion mistakes. I now know
            that everything in my wardrobe suits me.&quot; - PAM
          </div>
          <div className="testimonial-6">
            &quot;Emily has the amazing ability to put together the perfect
            outfit for my body type and make me look fantastic. I trust her
            completely to always find the best colours and styles for me.&quot;
            - MOLLY
          </div>
        </div>
      </div> */}
    </div>
  );
}
