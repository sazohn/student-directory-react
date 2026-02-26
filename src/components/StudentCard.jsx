import React from "react";
import Button from "./Button";
import Badge from "./Badge";

 function StudentCard({ student, onDelete, onToggle }) {
  if(!student) return null;
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>{student.course}</p>
      <p>Grade: {student.grade}</p>

      <div className="badges">
        <Badge type={student.isPresent ? "success" : "danger"}>
          {student.isPresent ? "Present" : "Absent"}
        </Badge>

        {student.grade >= 90 && (
          <Badge type="warning">Top Performer</Badge>
        )}
      </div>

      <div className="actions">
        <Button
          variant="outline"
          onClick={() => onToggle(student.id)}
        >
          {student.isPresent ? "Mark Absent" : "Mark Present"}
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
export default StudentCard;