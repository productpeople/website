import React from "react";
import TextSectionSmallTitle from "../components/TextSectionSmallTitle";

export default { title: "TextSectionSmallTitle" };

const items = [
	{
		title: "SERVICES",
		text:
			"We upgrade product teams through coaching, consulting, working hand-on and acting as a sparring partner for management. \nWe work directly and personally with you and your team to achieve current and future success.",
	},
	{
		title: "CASE STUDIES",
		text:
			"We would say more but we’ve signed an NDA. 😊 We’re happy to provide references or more general details about our work.",
	},
	{
		title: "MEETUPS AND EVENTS",
		text:
			"Meet our active community of 2400+ Product People with speakers come from Google, Delivery Hero, Zalando, Omio, Ada Health, Grover, Finleap and more.",
	},
	{
		title: "CULTURE",
		text:
			"We’re a small team of smart people on a mission to help the world build better products.",
	},
];

export const Mobile = () => {
	return items.map((item, idx) => (
		<TextSectionSmallTitle key={idx} item={item} />
	));
};
