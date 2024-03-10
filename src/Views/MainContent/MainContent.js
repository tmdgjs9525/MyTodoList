import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from '../TodoItem/TodoList';
import TodoItem from '../../Models/TodoItem';
import { Collapse, Stack } from 'react-bootstrap';
import AddTodoListButton from '../TodoItem/AddTodoListButton';
import AddTodoListForm from '../TodoItem/AddTodoListForm';
function GenTodoList(){
  let date = new Date().toLocaleDateString();
  let todoList = []
  todoList.push(new TodoItem(
    date,"오늘의 할 일",["출근하기","토이프로젝트 진행하기","강아지 산책하기"]));
  todoList.push(new TodoItem(
    date,"특별한 날",["생일케이크 먹기","외식하기","강아지 산책하기"]));
  todoList.push(new TodoItem(
    date,"노는 날",["친구 만나기","게임하기","토이프로젝트 진행하기"]));
  
 
  return todoList;
}

function MainContent(props){
  let [todoList, setTodoList] = useState(GenTodoList());
  let [AddTodoListButtonClicked,setAddTodoListButtonClicked] = useState(false);
  const deleteTodoList = (TodoList) => {
    const updatedTodoList = todoList.filter(
      (item) => item !== TodoList
    );
    setTodoList(updatedTodoList);
  };
  return(
    <Container>
      <Row >
        <Col className="text-end">
          <AddTodoListButton 
            AddTodoListButtonClicked={AddTodoListButtonClicked} 
            setAddTodoListButtonClicked={setAddTodoListButtonClicked}/>
        </Col>
      </Row>
      <Row style={{marginBottom:'100px',justifyContent:'flex-end'}}>
        {AddTodoListButtonClicked == true ? <AddTodoListForm todoList={todoList} setTodoList={setTodoList} setAddTodoListButtonClicked={setAddTodoListButtonClicked}/> : null}
      </Row>
      <Row >
        <Col>
          {
            todoList.map((item ,i)=>{
              const index = i*2;
              const secIndex = i*2+1;
              return(
                <Stack direction="horizontal" gap={5} style={{justifyContent:'flex-start'}}>
                  {
                    todoList[index] != null && 
                    <TodoList key={index} 
                        todoList ={todoList[index]} 
                        deleteTodoList={deleteTodoList}/>
                  }
                  {
                    todoList[secIndex] != null && 
                    <TodoList key={secIndex} 
                        todoList ={todoList[secIndex]} 
                        deleteTodoList={deleteTodoList}/>
                  }
                </Stack>
              )
          })}
        </Col>
      </Row>
    </Container>
  )
}
export default MainContent;
