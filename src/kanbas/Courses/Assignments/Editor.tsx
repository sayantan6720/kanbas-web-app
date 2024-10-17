import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableDate: string;
    submissionType: string;
    assignmentGroup: string;
  }

  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    const selectedAssignment = db.assignments.find(
      (assignment: Assignment) =>
        assignment._id === aid && assignment.course === cid
    );
    setAssignment(selectedAssignment || null);
  }, [aid, cid]);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label mb-1">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          className="form-control"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-4">
        <div className="p-3  border rounded" style={{ width: "100%" }}>
          <p>
            The assignment is{" "}
            <span className="text-danger">available online</span>
          </p>
          <p>{assignment.description}</p>
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
            value={assignment.points}
            className="form-control mb-3"
            style={{ width: "100%" }}
          />
        </div>

        <label htmlFor="wd-group" className="col-sm-3 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select
            id="wd-group"
            className="form-select mb-3"
            style={{ width: "100%" }}
            value={assignment.assignmentGroup}
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
          <select
            id="wd-display-grade-as"
            className="form-select mb-3"
            style={{ width: "100%" }}
            value="Points"
          >
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
            className="form-select mb-3"
            style={{ width: "100%" }}
            value={assignment.submissionType}
          >
            <option value="Online">Online</option>
          </select>

          <div className="form-group">
            <label className="form-label">Online Entry Options</label>
            <div className="form-check">
              <input
                id="wd-text-entry"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-website-url"
                type="checkbox"
                className="form-check-input"
                checked
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-media-recordings"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-file-upload"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
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
            style={{ width: "100%" }}
          />

          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <div className="d-flex align-items-center mb-2">
            <input
              id="wd-due-date"
              type="date"
              value={assignment.dueDate}
              className="form-control"
              style={{ width: "90%" }}
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
                  value={assignment.availableDate}
                  className="form-control"
                />
                <SlCalender className="ms-2" />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-to" className="form-label">
                Until
              </label>
              <div className="d-flex align-items-center mb-2">
                <input
                  id="wd-available-to"
                  type="date"
                  value={assignment.dueDate}
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
        <button className="btn btn-lg btn-danger">Save</button>
      </div>
    </div>
  );
}
