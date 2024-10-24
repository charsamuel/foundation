import cardImage from "@/assets/images/donations/donations-d-1.jpg";
import donation1 from "@/assets/images/donations/donations-d-2-1.jpg";
import donation2 from "@/assets/images/donations/donations-d-2-2.jpg";
import blogC1 from "@/assets/images/blog/blog-c-1.jpg";
import blogC2 from "@/assets/images/blog/blog-c-2.jpg";
import organizer1 from "@/assets/images/donations/donation-o-1.jpeg";
import sideDonations1 from "@/assets/images/donations/donations-s-1-1.jpg";
import sideDonations2 from "@/assets/images/donations/donations-s-1-2.jpeg";
import sideDonations3 from "@/assets/images/donations/donations-s-1-3.jpg";
import sideDonations4 from "@/assets/images/donations/donations-s-1-4.jpg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faMapMarker,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const text1 =
  "Every contribution counts, no matter how small. Your generosity can help us provide essential resources and support to those in need.";
const text2 =
  "Alinur Foundation is committed to making a difference in the lives of individuals and families facing challenges. Through your donations, we can bring hope and healing to communities worldwide.";
const text3 =
  "Your support empowers us to deliver vital programs and services, ensuring that every donation makes a significant impact.";
const text4 =
  "Join us in our mission to uplift the less fortunate and create a brighter future for all.";

export const donationsDetails = {
  title: "Your support can change lives",
  accentColor: "#fdbe44",
  image: cardImage,
  category: "Healthcare",
  count: "50",
  amounts: [
    {
      id: 1,
      amount: "50,000",
      desc: "Raised",
    },
    {
      id: 2,
      amount: "75,000",
      desc: "Goal",
    },
  ],
  content: {
    texts: [text1, text2],
    title: "Summary of Our Impact",
    text3,
    lists: [
      {
        id: 1,
        icon: faCheckCircle,
        text: "Providing essential healthcare services to those in need.",
      },
      {
        id: 2,
        icon: faCheckCircle,
        text: "Supporting education and empowerment initiatives.",
      },
      {
        id: 3,
        icon: faCheckCircle,
        text: "Delivering food and resources to vulnerable communities.",
      },
    ],
    text4,
    donation1,
    donation2,
  },
  bottom: {
    btnText: "Donate Now",
    btnLink: "contact",
    socials: [faTwitter, faFacebook, faPinterest, faInstagram],
  },
  presentation: {
    icon: "paroti-icon-checked",
    title: "About Our Foundation",
    btnText: "Learn More",
    btnLink: "contact",
  },
  commentsTitle: "Recent Supporter Comments",
  comments: [
    {
      id: 1,
      image: blogC1,
      name: "Christine Eve",
      date: "20 Aug, 2022",
      text: "I am proud to support the Alinur Foundation and its incredible work. Together, we can make a difference!",
      btnText: "Reply",
      link: "#",
    },
    {
      id: 2,
      image: blogC2,
      name: "James Smith",
      date: "21 Aug, 2022",
      text: "The Alinur Foundation has positively impacted many lives. I encourage everyone to donate!",
      btnText: "Reply",
      link: "#",
    },
  ],
  form: {
    title: "Leave a Comment",
  },
};

export const sidebar = {
  organizer: [
    {
      id: 1,
      image: organizer1,
      date: "Created 20 Aug, 2022",
      name: "Mike Hardson",
      lists: [
        { id: 1, icon: faTag, text: "Healthcare" },
        { id: 2, icon: faMapMarker, text: "New York, USA" },
      ],
    },
  ],
  donationsTitle: "Recent Donations",
  donations: [
    {
      id: 1,
      image: sideDonations1,
      amount: "$50",
      name: "David Marks",
      time: "2 hours ago",
      text: "Thank you for the amazing work you do!",
    },
    {
      id: 2,
      image: sideDonations2,
      amount: "$75",
      name: "Aleesha Brown",
      time: "3 hours ago",
      text: "Every little bit helps. Proud to support Alinur Foundation!",
    },
    {
      id: 3,
      image: sideDonations3,
      amount: "$100",
      name: "Kevin Smith",
      time: "5 hours ago",
      text: "God bless you all for your hard work.",
    },
    {
      id: 4,
      image: sideDonations4,
      amount: "$200",
      name: "Anonymous",
      time: "1 day ago",
      text: "Keep up the great work!",
    },
  ],
};
