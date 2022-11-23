import React, {useState} from 'react';
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import './List.css';

function List(props) {
    const dummy_data = [
        {
            id: '1',
            text: 'Take the dog for a walk'
        },
        {
            id: '2',
            text: 'Shower'
        },
        {
            id: '3',
            text: 'Check emails'
        }

    ];
    const [list, setList] = useState(dummy_data);
    const addItem = (todo) => {

        if (todo.text.trim() === "") {
            return; //pazi
        }

        const newList = [...list, todo];

        setList(newList);
    }

    const removeItem = id => {
        let removeArray = [...list].filter(todo => todo.id !== id)

        setList(removeArray);
    }


    return (

        <div className={"wrapper"}>

            <h2 className={"title"}>Plans for today</h2>
            <Todo list={list} removeItem={removeItem}/>
            <Form onSubmit={addItem}/>

        </div>

    );
}

export default List;