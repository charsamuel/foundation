import aboutShape from "@/assets/images/shapes/about-4-2.jpg";
import aboutImage from "@/assets/images/resources/about-4-1.jpg";
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

const aboutFourData = {
  aboutShape,
  tagLine: "More about the paroti",
  title: "Helping each other can \nchange the world",
  aboutImage,
  videoId: "CWCPovmNWK8",
  link: "https://www.youtube.com/watch?v=CWCPovmNWK8",
  icon: faPlay,
  text: "Join the community to give education for the childrens and together make them educated for their lives.",
  lists: [
    {
      id: 1,
      icon: faCheckCircle,
      title: "Our missions",
      text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
    {
      id: 2,
      icon: faCheckCircle,
      title: "Paroti stories",
      text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
    {
      id: 3,
      icon: faCheckCircle,
      title: "Donate for them",
      text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
  ],
};
export default aboutFourData;
