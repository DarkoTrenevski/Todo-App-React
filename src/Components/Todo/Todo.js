import React from 'react';
import {Grow} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";
import Button from "@mui/material/Button";
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import './Todo.css';

function Todo({list, removeItem}) {

    if (list.length === 0) {
        return <h2 className={"empty-list"}>Nothing to do here <SentimentSatisfiedSharpIcon/></h2>;
    }

    return (
        list.map((todo, index) => (
            <Grow in={true} timeout={400}>
                <div key={index} className={"todo-item"}>

                    <div
                        key={todo.id}
                        className={"todo-description"}
                    ><h2>{todo.text}</h2></div>

                    <Button
                        onClick={() => removeItem(todo.id)}
                        className={"todo-button"}
                        color={"warning"}
                        variant={"contained"}
                    ><DeleteForever fontSize={"medium"}/>
                    </Button>

                </div>
            </Grow>

        ))
    );
}

export default Todo;