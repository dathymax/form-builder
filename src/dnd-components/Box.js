import React from "react";
import { useDrag } from "react-dnd";

function Box({ children, id }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "box",
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div
			id={id}
			style={{ border: isDragging ? "3px solid pink" : "0px" }}
			ref={drag}
			className="box"
		>
			{children}
		</div>
	);
}

export default Box;
