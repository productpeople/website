import React from "react";
import ButtonBig from "../components/ButtonBig";

export default { title: "ButtonBig" };

const items = [
	{
		text: "Schedule a call",
	},
];

export const Mobile = () => {
	return items.map((item, idx) => <ButtonBig key={idx} item={item} />);
};
