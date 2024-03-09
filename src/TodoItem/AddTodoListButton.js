import { useRef } from 'react';
import Button from 'react-bootstrap/Button';

function AddTodoListButton(props) {
  return (
      <Button  size='lg' onClick={()=>{
        if(props.AddTodoListButtonClicked){
         props.setAddTodoListButtonClicked(false);
        }
        else{
         props.setAddTodoListButtonClicked(true);
        }
    }} style={{marginTop:'15px',background:'#6cc551',border:'#6cc551'}}>+</Button>

  );
}

export default AddTodoListButton;