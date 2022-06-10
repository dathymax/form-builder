import React from "react";
import "./style/main.scss";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import DragAndDrop from "./dnd-components/DragAndDrop";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <DragAndDrop/>
            </div>
        </DndProvider>
    );
}

export default App;
