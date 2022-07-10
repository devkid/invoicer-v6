import React, {FC, useState} from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import './App.css';
import {Todo} from "./model";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';


const App: FC = () => {
    //single todo
    const [todo, setTodo] = useState<string>('');
    //todos Array
    const [todos, setTodos] = useState<Todo[]>([]);
    // completed todos
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);


    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if(todo)
            setTodos([...todos, {
                id: uuidv4(),
                todo: todo,
                isDone: false,
        }])
        setTodo('')
    };


    const onDragEnd = (result: DropResult) => {
        const {source,destination} = result;
        console.log("result", result);

        if (!destination) return;

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index)
        return;

        let add;
        let active = todos;
        let complete = completedTodos;

        if(source.droppableId === 'TodoList') {
            add = active[source.index];
            active.splice(source.index,1 );
        }else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }

        if(destination.droppableId === 'TodoList') {
            active.splice(destination.index,0, add);
        }else {
            complete.splice(destination.index, 0, add);
        }

        setCompletedTodos(complete);
        setTodos(active);

    }

    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <div className='App'>
                <span className='heading'>Todo</span>

                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd = {handleAdd}
                />

                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </div>
        </DragDropContext>
    )
};

export default App;