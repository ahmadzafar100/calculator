import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Calculator = () => {
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ops = ["+", "-", "*", "/"];
  const [value, setValue] = useState("");
  const handleClick = (num) => {
    setValue((prev) => prev + num);
  };
  const handleCalculate = () => {
    try {
      const result = new Function("return " + value)();
      setValue(String(result));
    } catch (error) {
      // Catches invalid math (e.g., if the user types "18++2")
      setValue("Error");
    }
  };
  const inputRef = useRef(null);
  const handleClear = () => {
    console.log(inputRef);
    inputRef.current.placeholder = "0";
    setValue("");
  };
  return (
    <Container className="py-3">
      <Row>
        <Col sm={4} className="mx-auto">
          <Card>
            <Card.Header>
              <h3 className="text-center text-uppercase mb-0">
                <strong>Calculator</strong>
              </h3>
            </Card.Header>
            <Card.Body className="p-1">
              <Form.Control
                ref={inputRef}
                type="text"
                size="lg"
                placeholder="0"
                className="text-end mb-1 rounded-0"
                value={value}
                disabled
              />
              <Row className="g-1">
                {num.map((item, key) => (
                  <Col sm={3} key={key}>
                    <div className="d-grid gap-2">
                      <Button
                        variant="success"
                        size="lg"
                        className="rounded-0"
                        onClick={() => handleClick(item)}
                      >
                        {item}
                      </Button>
                    </div>
                  </Col>
                ))}
                {ops.map((item, key) => (
                  <Col sm={3} key={key}>
                    <div className="d-grid gap-2">
                      <Button
                        variant="dark"
                        size="lg"
                        className="rounded-0"
                        onClick={() => handleClick(item)}
                      >
                        {item}
                      </Button>
                    </div>
                  </Col>
                ))}
                <Col sm={3}>
                  <div className="d-grid gap-2">
                    <Button
                      variant="dark"
                      size="lg"
                      className="rounded-0"
                      onClick={handleCalculate}
                    >
                      =
                    </Button>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="d-grid gap-2">
                    <Button
                      variant="dark"
                      size="lg"
                      className="rounded-0"
                      onClick={handleClear}
                    >
                      AC
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
