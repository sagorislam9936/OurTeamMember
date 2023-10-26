import React from "react";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ShowSingleMember.css";
const ShowSingleMember = (props) => {
  const { member } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-3">
            <Card
              border="danger"
              className=" text-center    roundedCircle h-100 bg-warning"
              style={{ width: "18rem" }}
            >
              <Card.Body className="  ">
                <Card.Title> Selected Member </Card.Title>
                <Card.Text>
                  {member.name} {member.username}
                </Card.Text>
                <Card.Text></Card.Text>
                <Card.Text>{member.phone}</Card.Text>
                <Card.Text>{member.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowSingleMember;
