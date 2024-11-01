import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        availableDate: assignment.availableDate,
        dueDate: assignment.dueDate,
        points: assignment.points,
        description: assignment.description,
        submissionType: assignment.submissionType,
        assignmentGroup: assignment.assignmentGroup,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id
          ? { ...assignment, ...updatedAssignment }
          : assignment
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === assignmentId
          ? { ...assignment, editing: true }
          : assignment
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
