import react, { Component } from "react";


/*export default function Todo({title,deleteHandler,editHandler}){
    return(
        <div>
            <span>{title}</span>
            <button onClick={deleteHandler}>delete</button>
            <button onClick={editHandler}>Edit</button>
        </div>
    );
}*/

class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <span>{this.props.title}</span>
                <button onClick={this.props.deleteHandler}>Delete</button>
                <button onClick={this.props.editHandler}>Edit</button>
            </div>
        );
    }
}

export default Todo;