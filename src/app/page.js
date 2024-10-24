import AboutTwo from "@/components/AboutTwo/AboutTwo";
import Blog from "@/components/Blog/Blog";
import CtaOne from "@/components/CtaOne/CtaOne";
import DonationCarousel from "@/components/DonationCarousel/DonationCarousel";
import DonationTwo from "@/components/DonationTwo/DonationTwo";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";

import NewsLetterOne from "@/components/NewsLetterOne/NewsLetterOne";
import SliderOne from "@/components/SliderOne/SliderOne";
import Sponsors from "@/components/Sponsors/Sponsors";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import VideoOne from "@/components/VideoOne/VideoOne";

export default function Home() {
  return (
    <Layout>
      <main>
        <SliderOne />
        <AboutTwo />
        <DonationTwo />
        <CtaOne />
        <DonationCarousel />
        <TestimonialOne />
        <GalleryOne />
        <VideoOne />
        <Sponsors />
        <FunFactTwo />
        <Blog />
        <NewsLetterOne />
      </main>
    </Layout>
  );
}
