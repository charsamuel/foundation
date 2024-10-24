import AboutFive from "@/components/AboutFive/AboutFive";
import AboutSix from "@/components/AboutSix/AboutSix";
import BlogTwo from "@/components/BlogTwo/BlogTwo";
import CtaFour from "@/components/CtaFour/CtaFour";
import CtaThree from "@/components/CtaThree/CtaThree";
import DonationHomeThree from "@/components/DonationHomeThree/DonationHomeThree";
import EventHomeTwo from "@/components/EventHomeTwo/EventHomeTwo";
import FaqOne from "@/components/FaqOne/FaqOne";

import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import SliderThree from "@/components/SliderThree/SliderThree";
import Sponsors from "@/components/Sponsors/Sponsors";
import TesTimonialsTwo from "@/components/TestimonialsTwo/TesTimonialsTwo";
import Volunteers from "@/components/Volunteers/Volunteers";

import React from "react";
export const metadata = {
  title: "Home Two || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const HomeTwoPage = () => {
  return (
    <Layout pageTitle='Home Two'>
      <SliderThree />
      <AboutFive />
      <DonationHomeThree />
      <FaqOne />
      <EventHomeTwo />
      <AboutSix />
      <FunFactOne />
      <Volunteers />
      <CtaFour />
      <TesTimonialsTwo />
      <Sponsors title='homeTwo' />
      <BlogTwo />
      <CtaThree />
    </Layout>
  );
};

export default HomeTwoPage;
