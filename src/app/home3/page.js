// import AboutFour from "@/components/AboutFour/AboutFour";
import AboutThree from "@/components/AboutThree/AboutThree";
import BlogHomeThree from "@/components/BlogHomeThree/BlogHomeThree";
import CtaOne from "@/components/CtaOne/CtaOne";
import DonationHomeThree from "@/components/DonationHomeThree/DonationHomeThree";
import DonationThree from "@/components/DonationThree/DonationThree";
import GalleryOneThree from "@/components/GalleryOneThree/GalleryOneThree";
import Layout from "@/components/Layout/Layout";
import SliderTwo from "@/components/SliderTwo/SliderTwo";
import Sponsors from "@/components/Sponsors/Sponsors";
import React from "react";
export const metadata = {
  title: "Home Three || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const HomeThreePage = () => {
  return (
    <Layout pageTitle='Home Two'>
      <SliderTwo />
      <DonationThree />
      {/* <AboutFour /> */}
      <CtaOne />
      <DonationHomeThree />
      <AboutThree />
      <BlogHomeThree />
      <GalleryOneThree />
      <Sponsors title='homeThree' />
    </Layout>
  );
};

export default HomeThreePage;
