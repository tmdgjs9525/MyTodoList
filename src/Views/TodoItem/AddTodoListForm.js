import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import TodoItem from '../../Models/TodoItem';

function AddTodoListForm(props) {
  let [todoHead,setTodoHead] = useState("");
  let [todoItems,setTodoItems] = useState([""]);

  const inputChange= (index, value) => {
    const newInputs = [...todoItems];
    newInputs[index] = value;
    setTodoItems(newInputs);
  };
  return (
    <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="제목"
        className="mb-3"
        style={{ paddingLeft: '5px' }}
      >
        <Form.Control
          as="textarea"
          value={todoHead}
          onChange={(e)=>{
            setTodoHead(e.target.value);
          }}
          placeholder="Leave a comment here"
        />
      </FloatingLabel>
      {
        todoItems.map((item,i)=>(
          <AddTodoItemForm 
              key={i}
              value={item}
              onChange={(e) => inputChange(i,e.target.value)}></AddTodoItemForm>
      ))}
      <Button variant="outline-dark" style={{fontSize:'10px', width:'50px', height:'50px',marginRight:'15px'}}
        onClick={()=>{
          var items = [...todoItems];
          items.push("");
          setTodoItems(items);
          console.log(todoItems);
        }}>할 일 추가</Button>
      <Button variant="outline-dark" style={{fontSize:'20px', width:'50px', height:'50px',marginRight:'15px'}}
        onClick={()=>{
          var items = [...props.todoList];
          items.push(new TodoItem(new Date().toLocaleDateString(),todoHead,todoItems));
          props.setTodoList(items);
          props.setAddTodoListButtonClicked(false);
        }}>+</Button>
    </>
  );
}
function AddTodoItemForm({value , onChange}){
  return(
    <FloatingLabel
        controlId="floatingTextarea"
        label="할 일"
        className="mb-3"
        style={{ paddingLeft: '5px' }}
      >
        <Form.Control
          as="textarea"
          value={value}
          onChange={onChange}
          placeholder="Leave a comment here"
        />
    </FloatingLabel>
  );
}
export default AddTodoListForm;