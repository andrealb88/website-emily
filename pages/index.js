import HomePage from "./HomePage";
import PressPage from "./PressPage";
import Header from "./Header";
import TestimonialPage from "./Testimonial";
import SocialMedia from "./SocialMedia";
import FooterPage from "./Footer";
import { PageDataContext } from "@component/context/PageDataContext";

export default function App() {
  return (
    <PageDataContext.Provider value={{ pageData: "data" }}>
      <Header />
      <HomePage />
      <PressPage />
      <TestimonialPage />
      <SocialMedia />
      <FooterPage />
    </PageDataContext.Provider>
  );
}
