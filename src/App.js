import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import {CardDisplay} from './CardDisplay';


function App() {
  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="header">Intent List </h3>
          </Col>
        </Row>

        <CardDisplay />
      </Container>
    </div>
  );
}

export default App;
