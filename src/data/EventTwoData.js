import image1 from "@/assets/images/events/events-1-1.jpg";
import image2 from "@/assets/images/events/events-1-2.jpg";
import image3 from "@/assets/images/events/events-1-3.jpg";
import image4 from "@/assets/images/events/events-1-4.jpg";
import image5 from "@/assets/images/events/events-1-5.jpg";
import image6 from "@/assets/images/events/events-1-6.jpg";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const eventTwoData = {
  tagLine: "Upcoming Events",
  title: "Join Our Efforts \n to Make a Difference",
  text: "Explore our upcoming events that aim to transform lives and uplift communities. Be a part of meaningful change with Alinur Foundation.",
  link: "contact",
  btnText: "Reserve Your Spot",
  carouselData: [
    {
      id: 1,
      image: image1,
      date: "20 Oct",
      lists: [
        { id: 1, icon: faClock, cont: "10:00 AM" },
        { id: 2, icon: faMapMarkerAlt, cont: "Nairobi, Kenya" },
      ],
      title: "Empower Youth through Education",
      link: "event-details",
    },
    {
      id: 2,
      image: image3,
      date: "15 Nov",
      lists: [
        { id: 1, icon: faClock, cont: "2:00 PM" },
        { id: 2, icon: faMapMarkerAlt, cont: "Mombasa, Kenya" },
      ],
      title: "Health and Wellness for All",
      link: "event-details",
    },
    {
      id: 3,
      image: image2,
      date: "30 Nov",
      lists: [
        { id: 1, icon: faClock, cont: "11:00 AM" },
        { id: 2, icon: faMapMarkerAlt, cont: "Kisumu, Kenya" },
      ],
      title: "Women Empowerment Summit",
      link: "event-details",
    },
    {
      id: 4,
      image: image4,
      date: "5 Dec",
      lists: [
        { id: 1, icon: faClock, cont: "9:00 AM" },
        { id: 2, icon: faMapMarkerAlt, cont: "Eldoret, Kenya" },
      ],
      title: "Community Clean-Up and Awareness Drive",
      link: "event-details",
    },
    {
      id: 5,
      image: image5,
      date: "12 Dec",
      lists: [
        { id: 1, icon: faClock, cont: "1:00 PM" },
        { id: 2, icon: faMapMarkerAlt, cont: "Nakuru, Kenya" },
      ],
      title: "Feeding Program for Vulnerable Families",
      link: "event-details",
    },
    {
      id: 6,
      image: image6,
      date: "20 Dec",
      lists: [
        { id: 1, icon: faClock, cont: "4:00 PM" },
        { id: 2, icon: faMapMarkerAlt, cont: "Garissa, Kenya" },
      ],
      title: "Charity Concert for a Brighter Future",
      link: "event-details",
    },
  ],
};

export default eventTwoData;
