import React from "react";
import CaseStudyCard from "../components/CaseStudyCard";

export default { title: "CaseStudyCard" };

const defProps = {
  imgHeight: `358px`,
  subtitle: "Interim Product Management"
};
const items = [
  {
    ...defProps,
    imgURL: "/images/case study - 1 omio.png",
    title: "Omio"
  },
  {
    ...defProps,
    imgURL: "/images/case study - 2 heycar.png",
    title: "hey car"
  },
  {
    ...defProps,
    imgURL: "/images/case study - 3 koerber digital.png",
    title: "Körber Digital",
    subtitle: "MVP Scoping and Rollout"
  }
];

export const First = () => <CaseStudyCard item={items[0]} />;
export const Second = () => <CaseStudyCard item={items[1]} />;
export const Third = () => <CaseStudyCard item={items[2]} />;
