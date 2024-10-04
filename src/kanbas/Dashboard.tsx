import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNoteAlt } from "react-icons/md";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/9012/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS9012 Web Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to Web Development
                  </p>
                  <p className="text-muted">Fall 2024 - Section 001</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/8745/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS8745 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of Machine Learning
                  </p>
                  <p className="text-muted">Fall 2024 - Section 002</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3451/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3451 Cloud Computing
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    AWS Cloud Foundations
                  </p>
                  <p className="text-muted">Fall 2024 - Section 003</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4789/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4789 Cybersecurity
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to Cybersecurity
                  </p>
                  <p className="text-muted">Fall 2024 - Section 004</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6547/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6547 Artificial Intelligence
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    AI Fundamentals and Applications
                  </p>
                  <p className="text-muted">Fall 2024 - Section 005</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2348/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2348 DevOps
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    CI/CD with Jenkins and Docker
                  </p>
                  <p className="text-muted">Fall 2024 - Section 006</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1245/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1245 Blockchain
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Blockchain and Cryptocurrency
                  </p>
                  <p className="text-muted">Fall 2024 - Section 007</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "320px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6534/Home"
              >
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6534 Database Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced Database Systems
                  </p>
                  <p className="text-muted">Fall 2024 - Section 008</p>
                  <MdOutlineNoteAlt size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
