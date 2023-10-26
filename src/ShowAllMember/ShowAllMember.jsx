import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* import ShowSingleMember from "../ShowSingleMember/ShowSingleMember"; */
import "./ShowAllMember.css";
import AddMemberList from "../AddMemberList/AddMemberList";

const ShowAllMember = () => {
  /* use for show all members */
  const [members, setMembers] = useState([]);
  /* use for click button and show all members */
  const [memberList, SetMemberList] = useState(false);
  /* use for clik on button and show single member */
  /* const [selectMember, SetSelectMember] = useState({}); */
  useEffect(() => {
    if (memberList === true) {
      fetch("https://jsonplaceholder.typicode.com//users")
        .then((response) => response.json())
        .then((json) => setMembers(json));
    }
  }, [memberList]);

  const [addMemberList, setAddMemberList] = useState([]);

  const addMember = (member) => {
    setAddMemberList([...addMemberList, member]);
  };

  const deleteFromList = (memberName) => {
    console.log("line35", memberName);
    const filterTeam = addMemberList?.filter(
      (memberList) => memberList?.name !== memberName
    );

    setAddMemberList(filterTeam);
  };

  return (
    <div>
      <button className="btn2" onClick={() => SetMemberList(true)}>Show All Member</button>

      {/*    <ShowSingleMember member={selectMember} /> */}
      <AddMemberList member={addMemberList} deleteFromList={deleteFromList} />

      <Container>
        <Row md={3}>
          {members?.map((member, id) => (
            <Col className="mb-3   " key={id}>
              <Card
                border="danger"
                className="    roundedCircle h-100 bg-light"
                style={{ width: "18rem" }}
              >
                <Card.Body className="  ">
                  <Card.Title className="text-danger">
                    {" "}
                    Our Team Member{" "}
                  </Card.Title>
                  <Card.Text>
                    {member.name} {member.username}
                  </Card.Text>

                  <Card.Text>{member.phone}</Card.Text>
                  <Card.Text>{member.email}</Card.Text>
                  {/*  <Button
                    onClick={() => SetSelectMember(member)}
                    variant="primary btn"
                  >
                    Select  Member
                  </Button> */}

                  <Button
                    onClick={() => addMember(member)}
                    variant="primary btn "
                  >
                    Add To Team
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShowAllMember;
