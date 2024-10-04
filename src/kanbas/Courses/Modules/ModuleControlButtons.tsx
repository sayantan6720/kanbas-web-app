import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" />
      <BsThreeDotsVertical className="fs-4" />
    </div>
  );
}
