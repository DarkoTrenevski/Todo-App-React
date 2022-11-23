import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import './Form.css';

function Form(props) {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const submitHandler = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random().toString(), text: input
        })

        setInput('');

    }

    const changeHandler = e => {
        setInput(e.target.value);

        if (e.target.value.trim().length === 0) {
            setIsValid(false);
            return;
        }
        setIsValid(true);
    }


    return (<div>
        <p className={`invalidTitle ${!isValid ? 'invalid' : ''}`}>Invalid input </p>
        <form onSubmit={submitHandler} className={"form"}>

            <TextField
                value={input}
                onChange={changeHandler}
                className={`input ${!isValid ? 'invalid' : ''}`}

                label={"Write some tasks..."}
                variant={"filled"}
                size={"normal"}
                color={"secondary"}

            />

            <Button
                type={"submit"}
                className={`addTask ${!isValid ? 'invalid' : ''}`}
                id={"addTask"}

                variant={"contained"}
                size={"medium"}
                onClick={() => submitHandler}

                /* color={"success"}*/
            >Add Task
            </Button>

        </form>
    </div>);
}

export default Form;