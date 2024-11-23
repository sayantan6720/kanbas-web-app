import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; // Assuming assignments come from your database or a mock

const initialState = {
  assignments: assignments, // Populate the state with data from your mock database or initial state
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Action to add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(), // Generating a unique ID for the new assignment
        title: assignment.title,
        course: assignment.course,
        availableDate: assignment.availableDate,
        dueDate: assignment.dueDate,
        points: assignment.points,
        description: assignment.description,
        submissionType: assignment.submissionType,
        assignmentGroup: assignment.assignmentGroup,
      };
      state.assignments = [...state.assignments, newAssignment]; // Add the new assignment to the state
    },
    // Action to delete an assignment
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId // Remove assignment based on ID
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

    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments; 
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
  setAssignments, // Exporting the setAssignments action
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
