import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1235/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1235 Java Programming</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1236/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1236 Data Structures</h5>
              <p className="wd-dashboard-course-title">Algorithm Development</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1237/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1237 Operating Systems</h5>
              <p className="wd-dashboard-course-title">
                System Software Concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1238/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1238 Computer Networks</h5>
              <p className="wd-dashboard-course-title">
                Networking and Protocols
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1239/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1239 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">
                Machine Learning Basics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1240/Home"
          >
            <img
              src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
              width={200}
            />
            <div>
              <h5>CS1240 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">
                Security Concepts and Tools
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
