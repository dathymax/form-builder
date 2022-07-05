import React, {useCallback} from 'react';
import {DragDropContext, Draggable} from 'react-beautiful-dnd';
import Component from "./items/Component";

function BeautifulDnD(props) {
    // using useCallback is optional
    const onBeforeCapture = useCallback(() => {
        /*...*/
    }, []);
    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return (
        <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <div>Hello world</div>
            <Draggable draggableId="draggable-1" index={0}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <h4>My draggable</h4>
                    </div>
                )}
            </Draggable>
        </DragDropContext>
    );
}

export default BeautifulDnD;