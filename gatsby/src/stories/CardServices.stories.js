import React from "react";
import CardServices from "../components/CardServices";

export default { title: "CardServices" };

const items = [
	{
		deliveryTimeBox: {
			text: "1-2 days",
		},
		image: {
			height: "auto",
			imageURL: "/images/CardService-draftImage.png",
		},
		title: "Product Management Training",
		subtitle: "Discovery, Delivery, Metrics",
	},
];

export const Mobile = () => {
	return items.map((item, idx) => <CardServices key={idx} item={item} />);
};
