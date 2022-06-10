import React, {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import Elements from "../components/Elements";
import InputElement from "./InputElement";
import CheckboxElement from "./CheckboxElement";
import SelectElement from "./SelectElement";
import formElements from '../formElement.json'

const boxList = [
    {
        id: 1,
        box: <InputElement/>,
    },
    {
        id: 2,
        box: <CheckboxElement/>,
    },
    {
        id: 3,
        box: <SelectElement/>,
    },
];

function DragDrop() {
    const [board, setBoard] = useState([]);
    const [elementsJson, setElementsJson] = useState([]);

    useEffect(() => {
        setElementsJson(formElements)
    }, []);

    const [{isOver}, drop] = useDrop(() => ({
        accept: ["input", "checkbox", "select"],
        drop: (item) => addBox(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addBox = (id) => {
        console.log(id);
        const listBox = boxList.filter((box) => id === box.id);
        setBoard((board1) => [...board1, listBox[0]]);
    };

    const {fields, page_label} = elementsJson ?? {}

    return (
        <>
            <div className="pictures">
                {boxList.map((box) => {
                    return (
                        <div className="box" key={box.id} id={box.id}>
                            {box.box}
                        </div>
                    );
                })}
            </div>
            <div className="board" ref={drop}>
                {board.map((box) => {
                    return fields ? fields.map((field, i) => <Elements key={i} field={field}/>) : null
                })}
            </div>
        </>
    );
}

export default DragDrop;
