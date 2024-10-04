import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Peter</span>{" "}
              <span className="wd-last-name">Parker</span>
            </td>
            <td className="wd-login-id">001234561A</td>
            <td className="wd-section">S202</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-09-28</td>
            <td className="wd-total-activity">09:45:20</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Diana</span>{" "}
              <span className="wd-last-name">Prince</span>
            </td>
            <td className="wd-login-id">001234562B</td>
            <td className="wd-section">S203</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-09-27</td>
            <td className="wd-total-activity">11:12:50</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Clark</span>{" "}
              <span className="wd-last-name">Kent</span>
            </td>
            <td className="wd-login-id">001234563C</td>
            <td className="wd-section">S204</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-09-26</td>
            <td className="wd-total-activity">07:34:45</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Wade</span>{" "}
              <span className="wd-last-name">Wilson</span>
            </td>
            <td className="wd-login-id">001234564D</td>
            <td className="wd-section">S205</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2024-09-25</td>
            <td className="wd-total-activity">13:22:35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
