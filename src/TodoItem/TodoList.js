import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Trash ,Cake2,PlusLg} from 'react-bootstrap-icons';
import AddTodoListForm from './AddTodoListForm';

function TodoList(props){
 return(
  <Card style={{width:'18rem', marginBottom:'50px', minHeight:'262px'}}>
    <Card.Body >
      {renderTodoTitle(props.todoList.title)}
      {renderTodoItems(props.todoList.todoList)}
    </Card.Body>
    <Card.Footer className="d-flex" style={{justifyContent:"space-between"}}>
        <Card.Text style={{textAlign:'center'}}>{props.todoList.date}</Card.Text>
        <div>
          <PlusLg style={{cursor:'pointer'}} onClick={()=>{
          }}/>
          <Trash style={{cursor:'pointer'}} onClick={()=>{
              props.deleteTodoList(props.todoList);
          }}/>
        </div>
      </Card.Footer>
  </Card>
      
 )
}

function renderTodoTitle(title){
  return(
    <Card.Text style={{fontSize:'25px'}}>{title}</Card.Text>
  )
 }
 function renderTodoItems(todoList){
  return(
    todoList.map((item,i)=>{
      let [isTextHovered,setIsTextHovered] = useState(false);
      let [isTextClicked,setIsTextClicked] = useState(false);
      return(
          <Card.Text key={i} 
            onMouseEnter={()=>{
              setIsTextHovered(true);
           }}
            onMouseLeave={()=>{
              setIsTextHovered(false);
            }}
            onClick={()=>{
                setIsTextClicked(!isTextClicked);
            }}  
          style={{cursor:'pointer',color: isTextHovered ? '#6cc551':'gray',transition:'color 0.3s'}}>
            {isTextClicked == true ? <del>{item}</del> : item}
          </Card.Text>
       )
      }
    )
  )
 }
export default TodoList;
