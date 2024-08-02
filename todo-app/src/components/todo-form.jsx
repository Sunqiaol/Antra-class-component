import { Component, useState } from "react";
import react from "react";


/*export default function Todo({ addNewTodo }) {
    // controlled component/ two way binding
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input id="input" value={inputValue} onChange={handleInputChange} />
            <button
                onClick={() => {
                    addNewTodo(inputValue);
                }}
            >
                add todo
            </button>
        </div>
    );
}*/

class TodoForm extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        inputValue: ""
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
                        this.props.addNewTodo(this.state.inputValue);
                    }}
                >
                    add todo
                </button>
            </div>
        );
    }
}

export default TodoForm;