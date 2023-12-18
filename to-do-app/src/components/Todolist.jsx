
const Todolist = (props) => {
    return ( 
        <div className="list-div">
        <div className="list-container p-1">
        <li className=" list border border-1 border-dark p-4 m-3">
            {props.item}
            <span className="icons p-4">
            <i className="fa-solid fa-trash fa-lg icon-delete" onClick={e=>{
                props.delete(props.index);
            }}></i>
            </span>
        </li>
        </div>
        </div>
     );
}
 
export default Todolist;