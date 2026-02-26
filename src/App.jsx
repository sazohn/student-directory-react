import React, { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [students,setStudents] = useState([]);
  const [name,setName] = useState("");
  const [course,setCourse] = useState("");
  const [grade,setGrade] = useState("");
  const [search,setSearch] = useState("");
  const [filterStatus,setFilterStatus] = useState("all");
  // Add Student
  const handleAddStudent = (e) => {
    e.preventDefault();

    if (!name ||!course ||!grade) return;

    const newStudent = {
      id: Date.now(),
      name,
      course,
      grade: Number(grade),
      isPresent: true,
    };

    setStudents([...students, newStudent]);
    setName("");
    setCourse("");
    setGrade("");
  };
  // Delete Student
  const handleDelete =(id)=> {
    setStudents(students.filter((student)=>student.id!==id));
  };
  // Toggle Present/Absent
  const handleToggleStatus =(id)=>{
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    );
  };
  // Filtering + Searching
  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((student) => {
      if (filterStatus === "present") return student.isPresent;
      if (filterStatus === "absent") return !student.isPresent;
      return true;
    });
  return (
    <div className="container">
      <h1 className="title">🎓 Student Directory</h1>

      {/* Toolbar */}
      <div className="toolbar">
        <Input
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
        />
        <select
          className="select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </div>

      {/* Add Student Form */}
      <form className="form" onSubmit={handleAddStudent}>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <Input
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter course"
        />
        <Input
          label="Grade"
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Enter grade"
        />
        <Button type="submit" variant="primary">
          Add Student
        </Button>
      </form>
      {/* Conditional Rendering */}
      {students.length === 0 ? (
        <p className="empty">No students added yet.</p>
      ) : filteredStudents.length === 0 ? (
        <p className="empty">No results found.</p>
      ) : (
        <div className="grid">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={handleDelete}
              onToggle={handleToggleStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;