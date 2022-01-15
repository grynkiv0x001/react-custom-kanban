import { useState } from 'react';

import { v4 as uuid } from 'uuid';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// API
import { itemsFromAPI, listsFromAPI } from '../../api/mockData';

// Styles
import './Board.scss';

export const Board = () => {
  const [lists, setLists] = useState(listsFromAPI);

  return (
    <div className="board">
      <DragDropContext>
        { Object.entries(lists).map(([id, list]) => {
          return (
            <Droppable key={id} droppableId={id}>
              { (provided, snapshot) => {
                return (
                  <div
                    className="board__list"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="board__list-title">
                      {list.name}
                    </div>
                    { list.items?.map((item, index) => {
                      return (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          { (provided, snapshot) => {
                            return (
                              <div
                                className="board__item"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {item.content}
                              </div>
                            );
                          } }
                        </Draggable>
                      );
                    }) }
                  </div>
                );
              } }
            </Droppable>
          );
        }) }
      </DragDropContext>
    </div>
  );
};
