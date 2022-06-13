import React from "react";
import Box from "./Box";
import CheckboxElement from "./CheckboxElement";
import InputElement from "./InputElement";
import SelectElement from "./SelectElement";

const boxList = [
	{
		id: 1,
		title: "Input element",
		element: <InputElement />,
	},
	{
		id: 2,
		title: "Checkbox element",
		element: <CheckboxElement />,
	},
	{
		id: 3,
		title: "Select element",
		element: <SelectElement />,
	},
];

const SideBar = () => {
	return (
		<div>
			{boxList.map((box) => {
				return (
					<Box key={box.id} id={box.id}>
						{box.title}
					</Box>
				);
			})}
		</div>
	);
};

export default SideBar;
