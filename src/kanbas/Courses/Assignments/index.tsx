import React, { useState, useEffect } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import {
  BsGripVertical,
  BsThreeDotsVertical,
  BsPlus,
  BsTrash,
} from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { findAssignmentsForCourse, deleteAssignmentAPI } from "./client";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === "FACULTY";
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<
    null | string
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!cid) return;
      try {
        const courseAssignments = await findAssignmentsForCourse(cid);
        dispatch(setAssignments(courseAssignments));
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const filteredAssignments = assignments.filter((assignment: any) =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleDeleteClick = (assignmentId: string) => {
    setSelectedAssignmentId(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (selectedAssignmentId) {
      try {
        await deleteAssignmentAPI(selectedAssignmentId); // Delete from API
        dispatch(deleteAssignment(selectedAssignmentId)); // Update Redux state
        setSelectedAssignmentId(null);
        setShowDeleteDialog(false);
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
  };

  const cancelDelete = () => {
    setSelectedAssignmentId(null);
    setShowDeleteDialog(false);
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>

        {isFaculty && (
          <div className="d-flex gap-2">
            <button className="btn btn-lg btn-light border">+ Group</button>
            <button
              className="btn btn-lg btn-danger"
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}
            >
              + Assignment
            </button>
          </div>
        )}
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
              {filteredAssignments.length} Total
            </span>
            <BsPlus className="me-3 fs-4 text-muted" />
            <BsThreeDotsVertical className="text-muted" />
          </div>
        </div>

        <ul id="wd-assignment-list" className="list-group">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment: any) => (
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
                      to={
                        isFaculty
                          ? `/Kanbas/Courses/${cid}/Assignments/${assignment._id}`
                          : "#"
                      }
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
                {isFaculty && (
                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-3" />
                    <BsTrash
                      className="text-muted cursor-pointer"
                      onClick={() => handleDeleteClick(assignment._id)}
                    />
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="list-group-item">
              No assignments found for this course.
            </li>
          )}
        </ul>
      </div>

      {showDeleteDialog && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              s
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={cancelDelete}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
