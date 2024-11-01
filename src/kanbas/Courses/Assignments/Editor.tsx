import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { SlCalender } from "react-icons/sl";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === "FACULTY";

  useEffect(() => {
    if (!isFaculty) {
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  }, [isFaculty, navigate, cid]);

  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === aid && assignment.course === cid
  );

  const [assignment, setAssignment] = useState({
    id: "",
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableDate: "",
    untilDate: "",
    assignmentGroup: "Assignments",
    submissionType: "Online",
  });

  useEffect(() => {
    if (existingAssignment) {
      setAssignment({
        id: existingAssignment._id,
        title: existingAssignment.title,
        description: existingAssignment.description,
        points: existingAssignment.points,
        dueDate: existingAssignment.dueDate,
        availableDate: existingAssignment.availableDate,
        untilDate: existingAssignment.untilDate || "",
        assignmentGroup: existingAssignment.assignmentGroup,
        submissionType: existingAssignment.submissionType || "Online",
      });
    }
  }, [existingAssignment]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(
        updateAssignment({
          ...assignment,
          _id: existingAssignment._id,
          course: cid,
        })
      );
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label mb-1">
          Assignment Name
        </label>
        <input
          id="wd-name"
          name="title"
          value={assignment.title}
          onChange={handleInputChange}
          className="form-control"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-4">
        <div className="p-3 border rounded" style={{ width: "100%" }}>
          <p>
            The assignment is{" "}
            <span className="text-danger">available online</span>
          </p>
          <textarea
            id="wd-description"
            name="description"
            rows={6}
            value={assignment.description}
            onChange={handleInputChange}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="mb-4 row ms-5">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label">
          Points
        </label>
        <div className="col-sm-9">
          <input
            id="wd-points"
            type="number"
            name="points"
            value={assignment.points}
            onChange={handleInputChange}
            className="form-control mb-3"
          />
        </div>

        <label htmlFor="wd-group" className="col-sm-3 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select
            id="wd-group"
            name="assignmentGroup"
            value={assignment.assignmentGroup}
            onChange={handleInputChange}
            className="form-select mb-3"
          >
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            <option value="Projects">Projects</option>
          </select>
        </div>

        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-3 col-form-label"
        >
          Display Grade as
        </label>
        <div className="col-sm-9">
          <select id="wd-display-grade-as" className="form-select mb-3">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </div>
      </div>

      <div className="mb-4 row ms-5">
        <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">
          Submission Type
        </label>
        <div className="col-sm-9 border p-3 rounded">
          <select
            id="wd-submission-type"
            name="submissionType"
            value={assignment.submissionType}
            onChange={handleInputChange}
            className="form-select mb-3"
          >
            <option value="Online">Online</option>
          </select>

          <div className="form-group">
            <label className="form-label">Online Entry Options</label>
            <div className="form-check">
              <input
                id="text-entry"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                id="website-url"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                id="media-recordings"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                id="file-upload"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="file-upload" className="form-check-label">
                File Upload
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 row ms-5">
        <label htmlFor="wd-assign" className="col-sm-3 col-form-label">
          Assign
        </label>
        <div className="col-sm-9 border p-3 rounded">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign To
          </label>
          <input
            id="wd-assign-to"
            value="Everyone"
            className="form-control mb-2"
            readOnly
          />

          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <div className="d-flex align-items-center mb-2">
            <input
              id="wd-due-date"
              type="date"
              name="dueDate"
              value={assignment.dueDate}
              onChange={handleInputChange}
              className="form-control"
            />
            <SlCalender className="ms-2" />
          </div>

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="wd-available-from" className="form-label">
                Available From
              </label>
              <div className="d-flex align-items-center mb-2">
                <input
                  id="wd-available-from"
                  type="date"
                  name="availableDate"
                  value={assignment.availableDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
                <SlCalender className="ms-2" />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until" className="form-label">
                Until
              </label>
              <div className="d-flex align-items-center mb-2">
                <input
                  id="wd-available-until"
                  type="date"
                  name="untilDate"
                  value={assignment.untilDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
                <SlCalender className="ms-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-lg btn-secondary"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-lg btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
