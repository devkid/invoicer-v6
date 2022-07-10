import React, {FC} from 'react';
import '../App.css';
import {Todo} from "../model";
import SingleTodo from './SingleTodo'
import {Droppable} from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    completedTodos: Array<Todo>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {

    return (
        <div className='container'>
            <Droppable droppableId='TodoList'>
                {(provided, snapshot) => (
                    <div
                        className={`todos ${snapshot.isDraggingOver?'dragactive': ''}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className='todos__heading'>
                            Active Tasks
                        </span>
                        {todos?.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`todos remove ${snapshot.isDraggingOver?'dragcomplete': 'remove'}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                    <span className='todos__heading'>
                        Completed Tasks
                    </span>
                        {completedTodos?.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
};
export default TodoList;