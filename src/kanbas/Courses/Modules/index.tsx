import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            {/* Flex container to align the grip icon, week text, and checkmark */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Week 1
              </div>
              <ModuleControlButtons />
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            {/* Flex container to align the grip icon, week text, and checkmark */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Week 2
              </div>
              <ModuleControlButtons />
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
