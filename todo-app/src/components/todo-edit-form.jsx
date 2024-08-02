import { Component, useState } from "react";
import React from "react";


/*export default function EditTodo({content,EditTodoFunction}) {
    const [inputValue, setInputValue] = useState(content);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input id="input" value={inputValue} onChange={handleInputChange} />
            <button
                onClick={() => {
                    EditTodoFunction(inputValue);
                }}
            >
                Editing todo
            </button>
        </div>
    );
}*/


class EditTodo extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        inputValue: this.props.content
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    };

    render() {
        return (
            <div>
                <input id="input" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button
                    onClick={() => {
                        this.props.EditTodoFunction(this.state.inputValue);
                    }}
                >
                    Editing todo
                </button>
            </div>
        )
    }
}

export default EditTodo;


