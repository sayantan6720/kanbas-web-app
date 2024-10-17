import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsGripVertical, BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments: {
    _id: string;
    course: string;
    title: string;
    availableDate: string;
    dueDate: string;
    points: number;
  }[] = db.assignments;

  const filteredAssignments = assignments.filter(
    (assignment: { course: string }) => assignment.course === cid
  );

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[month - 1]} ${day}, ${year}`;
  };

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <HiMiniMagnifyingGlass className="text-muted" />
          </span>
          <input
            id="wd-search-assignment"
            type="text"
            placeholder="Search..."
            className="form-control border-start-0"
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-lg btn-light border">+ Group</button>
          <button className="btn btn-lg btn-danger">+ Assignment</button>
        </div>
      </div>

      <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown className="me-2 fs-4" />
            <span>ASSIGNMENTS</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="badge rounded-pill border border-dark text-muted px-3 py-1">
              40% of Total
            </span>
            <BsPlus className="me-3 fs-4 text-muted" />
            <BsThreeDotsVertical className="text-muted" />
          </div>
        </div>

        <ul id="wd-assignment-list" className="list-group">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map(
              (assignment: {
                _id: string;
                title: string;
                availableDate: string;
                dueDate: string;
                points: number;
              }) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center"
                  style={{ borderLeft: "5px solid green", borderRadius: "0" }}
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-3 fs-5 text-muted" />
                    <MdOutlineNoteAlt className="me-2 fs-5 text-muted" />
                    <div>
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-dark fw-bold text-decoration-none"
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <small className="text-muted">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>Not available until:</strong>{" "}
                        {formatDate(assignment.availableDate)} |
                      </small>
                      <br />
                      <small className="text-muted">
                        <strong>Due:</strong> {formatDate(assignment.dueDate)} |{" "}
                        {assignment.points} pts
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-3" />
                    <BsThreeDotsVertical className="text-muted" />
                  </div>
                </li>
              )
            )
          ) : (
            <li className="list-group-item">
              No assignments found for this course.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
