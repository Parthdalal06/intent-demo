import { useState } from "react";
import { demoIntents } from "./mock/intents";
import Card from "react-bootstrap/Card";
import { CardGroup, Col, Row } from "react-bootstrap";

export const CardDisplay = () => {
    const [selectedIntents, setSelectedIntents] = useState([]);
    const handleCheckboxChange = (intent) => {
      const tempSelectedIntents = [...selectedIntents];
      if (tempSelectedIntents.filter((e) => e.id === intent.id).length > 0)
        tempSelectedIntents.splice(
          tempSelectedIntents.findIndex((x) => x.id === intent.id),
          1
        );
      else tempSelectedIntents.push(intent);
      setSelectedIntents(tempSelectedIntents);
    };
    return (
      <>
        {selectedIntents.length > 0 && (
          <small className="text-muted">Selected Intents:</small>
        )}
        <Row>
          {selectedIntents &&
            selectedIntents.map((selectedIntent) => {
              return (
                <Col md={4} key={selectedIntent.id}>
                  <Card body>{selectedIntent.name}</Card>
                </Col>
              );
            })}
        </Row>
        <CardGroup>
          {demoIntents.map((intent) => {
            return (
              <Col md={4} key={intent.id}>
                <Card bg="light" className="intent m-2">
                  <Card.Title>{intent.name}</Card.Title>
                  <Card.Body>
                    <small className="text-muted">Expressions:</small>
                    <Card.Text>
                      {intent.trainingData.expressions.map((expression) => {
                        return (
                          <div key={expression.id} className="intentType">
                            {expression.text}
                          </div>
                        );
                      })}
                      <small className="text-muted">Reply:</small>
                      <div className="intentTypeReply">{intent.reply.text}</div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col md={1}>
                        <input
                          type="checkbox"
                          id={intent.id}
                          name={intent.text}
                          onChange={() => handleCheckboxChange(intent)}
                        />
                      </Col>
                      <Col>
                        <small className="text-muted">Select Intent</small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </CardGroup>
      </>
    );
  };