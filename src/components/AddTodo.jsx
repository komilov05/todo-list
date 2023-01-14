import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTodo({todo,setTodo}) {
    const [value, setValue] = useState('')

    function saveTodo(){
        setTodo(
            [
                ...todo, {
                    id:uuidv4(),
                    title:value
                }
            ]
            )
            if(setValue(value) === '') {
                return;
            }
     setValue('')
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='Write Todo' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={saveTodo} type='button' >Add Todo</button> 
            </form>
        </div>
    );
}

export default AddTodo;