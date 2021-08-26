import actionsType from "./actionTypes";

export const fetchEmployeeInitiate = () => ({
  type: actionsType.FETCH_EMPLOYEES_DATA_INITIATE,
});

export const fetchEmployeeSuccess = (data) => ({
  type: actionsType.FETCH_EMPLOYEES_DATA_SUCCESS,
  payload: data,
});

export const fetchEmployeeFailure = (err) => ({
  type: actionsType.FETCH_EMPLOYEES_DATA_FAILURE,
  payload: err,
});

export const deleteEmployee = (id) => ({
  type: actionsType.DELETE_EMPLOYEE,
  payload: id,
});

export const addEmployee = (data) => ({
  type: actionsType.ADD_EMPLOYEE,
  payload: data,
});

export const editEmployee = (data) => ({
  type: actionsType.EDIT_EMPLOYEE,
  payload: data,
});

export const selectEmployee = (data) => ({
  type: actionsType.SELECT_EMPLOYEE,
  payload: data,
});
