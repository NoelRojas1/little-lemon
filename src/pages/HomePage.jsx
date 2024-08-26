import { Fragment } from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Specials />
      <Testimonials />
      <Chicago />
    </Fragment>
  );
}

export default HomePage;
