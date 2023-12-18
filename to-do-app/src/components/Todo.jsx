import { useState } from "react";
import "../css/style.css";

const Todo = (props) => {
    const [input, setInput] = useState("");

    return ( 
        <div className="centered">
            <div className="pt-5">
                <input 
                    type="text" 
                    placeholder="Add your work" 
                    value={input}
                    className="input px-4 py-3 me-2" 
                    onChange={e => {
                        setInput(e.target.value);
                    }}
                />
                <button 
                    className="btn btn-success py-2 rounded-pill" 
                    onClick={() => { 
                        props.addList(input);
                        setInput("");
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
 
export default Todo;


