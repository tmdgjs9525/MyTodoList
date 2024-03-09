import { useRef } from 'react';
import Button from 'react-bootstrap/Button';

function AddTodoListButton(props) {
  return (
      <Button  size='lg' 
        aria-expanded={props.AddTodoListButtonClicked}
        aria-controls="todoListForm"
        onClick={()=>{
          props.setAddTodoListButtonClicked(!props.AddTodoListButtonClicked);
    }} style={{marginTop:'15px',background:'#6cc551',border:'#6cc551'}}>+</Button>

  );
}

export default AddTodoListButton;