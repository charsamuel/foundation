import bg from "@/assets/images/backgrounds/testimonials-1-bg.jpg";
import testi1 from "@/assets/images/resources/testi-2-1.png";
import testi2 from "@/assets/images/resources/testi-2-2.png";
import testi3 from "@/assets/images/resources/testi-2-3.png";
import testi4 from "@/assets/images/resources/testi-2-4.png";
import testi5 from "@/assets/images/resources/testi-2-5.png";
import itemBg1 from "@/assets/images/shapes/testimonials-item-bg-1-1.png";
import cardImage1 from "@/assets/images/resources/testi-1-1.png";

const testimonialOneData = {
  bg,
  testi1,
  testi2,
  testi3,
  testi4,
  testi5,
  title: "What Our Supporters Say",
  tagLine: "Testimonials from our donors",
  text: "We are grateful for the incredible support from our community. Here’s what our donors have to say about their experience.",
  carouselData: [
    {
      id: 1,
      icon: "paroti-icon-quote testimonials-card__icon",
      text: "Supporting this foundation has been one of the most fulfilling experiences of my life. I’ve seen firsthand how our contributions make a difference.",
      name: "Jane Doe",
      desig: "Donor",
      itemImage: itemBg1,
      cardImage: cardImage1,
    },
    {
      id: 2,
      icon: "paroti-icon-quote testimonials-card__icon",
      text: "I’m proud to support a charity that truly cares for those in need. My donations have directly helped families in my community.",
      name: "John Smith",
      desig: "Monthly Contributor",
      itemImage: itemBg1,
      cardImage: cardImage1,
    },
    {
      id: 3,
      icon: "paroti-icon-quote testimonials-card__icon",
      text: "The impact of my contributions is visible and meaningful. I appreciate the transparency and commitment of this organization.",
      name: "Emily Johnson",
      desig: "Long-term Supporter",
      itemImage: itemBg1,
      cardImage: cardImage1,
    },
  ],
};

export default testimonialOneData;
