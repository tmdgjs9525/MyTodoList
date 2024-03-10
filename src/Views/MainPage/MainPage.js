import MainContent from "../MainContent/MainContent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from '../Header/TopBar'

function MainPage(props){
  return(
    <Container>
      <Row style={{marginBottom:'100px'}}>
        <Col>
          <TopBar />
        </Col>
      </Row>
      <Row>
        <MainContent/>
      </Row>
    </Container>
  )
}
export default MainPage;
