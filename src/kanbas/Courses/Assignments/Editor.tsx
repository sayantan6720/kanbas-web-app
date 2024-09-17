import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={6} cols={50}>
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section, links to each of the lab
        assignments, link to the Kanbas application, links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-grade">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Online Entry Options</h4>
      <input type="checkbox" id="text-entry" />
      <label htmlFor="text-entry"> Text Entry</label>
      <br />
      <input type="checkbox" id="website-url" />
      <label htmlFor="website-url"> Website URL</label>
      <br />
      <input type="checkbox" id="media-recordings" />
      <label htmlFor="media-recordings"> Media Recordings</label>
      <br />
      <input type="checkbox" id="student-annotation" />
      <label htmlFor="student-annotation"> Student Annotation</label>
      <br />
      <input type="checkbox" id="file-uploads" />
      <label htmlFor="file-uploads"> File Uploads</label>
      <br />
      <br />
      <label htmlFor="wd-assign-to">Assign To</label>
      <input id="wd-assign-to" value="Everyone" />
      <br />
      <br />
      <label htmlFor="wd-due-date">Due</label>
      <input type="date" id="wd-due-date" value="2024-05-13" />
      <br />
      <br />
      <label htmlFor="wd-available-from">Available from</label>
      <input type="date" id="wd-available-from" value="2024-05-06" /> &nbsp;
      <label htmlFor="wd-available-until">Until</label>
      <input type="date" id="wd-available-until" value="2024-05-20" />
      <br />
      <br />
      <button>Cancel</button> &nbsp;
      <button>Save</button>
    </div>
  );
}
