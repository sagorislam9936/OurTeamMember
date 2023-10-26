import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./AddMemberList.css";
const AddMemberList = (props) => {
  const { member, deleteFromList } = props;
  console.log("line5", member);

  return (
    <div>
      <ListGroup>
        {member?.map((memberList, id) => (
          <ListGroup.Item key={id}>
            <div className="text-danger">
              <h4>
                Name: {memberList.name} {memberList.username}
              </h4>
              <p>Phone: {memberList.phone}</p>
            </div>{" "}
            <button
              className="btn2"
              onClick={() => deleteFromList(memberList.name)}
            >
              {" "}
              Remove Member{" "}
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default AddMemberList;
