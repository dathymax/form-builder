import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Elements from "../components/Elements";
import formElement from "../formElement.json";
import SideBar from "./SideBar";

function DragDrop() {
	const [board, setBoard] = useState([]);
	const [elementsJson, setElementsJson] = useState([]);

	useEffect(() => {
		setElementsJson(formElement);
	}, []);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: ["input", "checkbox", "select", "box"],
		drop: (item) => addBox(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const { fields } = elementsJson[0] ?? {};

	const addBox = (id) => {
		console.log(id);
		const listBox = fields?.filter((field) => id === field.field_id);
		setBoard((board) => [...board, listBox[0]]);
	};

	console.log("data", fields);

	return (
		<>
			<div className="board" ref={drop}>
				{board.map(() => {
					return fields?.map((field) => {
						return <Elements field={field} />;
					});
				})}
			</div>
			<SideBar />
		</>
	);
}

export default DragDrop;
