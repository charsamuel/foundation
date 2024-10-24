import person from "@/assets/images/resources/about-5-p-1.jpg";
import shape1 from "@/assets/images/shapes/about-1-1.png";
import shape2 from "@/assets/images/shapes/about-1-2.png";
// import aboutOne from "@/assets/images/resources/about-1-1.jpg";
import aboutTwo from "@/assets/images/resources/about-1-2.jpg";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import metaImage from "@/assets/images/resources/testi-1-1.png";

const items = [
  {
    id: 1,
    itemIcon: faCheckCircle,
    itemTitle: "Support Underprivileged Children",
  },
  {
    id: 2,
    itemIcon: faCheckCircle,
    itemTitle: "Empower Communities",
  },
];

const aboutOneData = {
  shape1,
  shape2,
  // aboutOne,
  aboutTwo,
  tagLine: "Learn more about Alinur Foundation",
  title: "Together, we can change lives",
  items,
  aboutTagline:
    "Alinur Foundation is dedicated to uplifting communities and supporting the less fortunate.",
  text: "With a commitment to transparency and impact, we strive to provide the best support to those in need. Our initiatives focus on education, health, and empowerment, ensuring a brighter future for all.",
  metaImage,
  name: "Alinur",
  desig: "CEO & Co-Founder",
};

export default aboutOneData;
