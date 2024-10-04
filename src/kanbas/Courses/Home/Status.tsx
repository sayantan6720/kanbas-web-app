import React from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5"; // Updated icon for statistics
import { GoBellFill } from "react-icons/go"; // Updated icon for bell

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px", marginLeft: "25px" }}>
      {" "}
      {/* Updated dimensions */}
      <h2>Course Status</h2>
      <div className="d-flex mb-4">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50 ps-1">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </button>
        </div>
      </div>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdHome className="me-2 fs-5" />
        Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoStatsChartSharp className="me-2 fs-5" />{" "}
        {/* Updated icon for statistics */}
        View Course Screen
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" />
        New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoStatsChartSharp className="me-2 fs-5" />{" "}
        {/* Updated icon for analytics */}
        New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GoBellFill className="me-2 fs-5" /> {/* Updated icon for bell */}
        View Course Notifications
      </button>
    </div>
  );
}
