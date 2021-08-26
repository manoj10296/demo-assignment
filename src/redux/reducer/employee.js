import actionTypes from "../actions/actionTypes";
const initialState = {
  loader: false,
  data: [],
  error: [],
  selectedEmployee: {},
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES_DATA_INITIATE: {
      return {
        ...state,
        loader: true,
        data: [],
        error: [],
        selectedEmployee: {},
      };
    }

    case actionTypes.FETCH_EMPLOYEES_DATA_SUCCESS: {
      return {
        ...state,
        loader: false,
        data: action.payload,
      };
    }

    case actionTypes.DELETE_EMPLOYEE: {
      const filteredEmployee = state.data.filter(
        (ele) => ele.id !== action.payload
      );
      return {
        ...state,
        data: filteredEmployee,
      };
    }

    case actionTypes.ADD_EMPLOYEE: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }

    case actionTypes.EDIT_EMPLOYEE: {
      const filtered = state.data.filter((ele) => ele.id !== action.payload.id);
      const updatedEmployee = [...filtered, action.payload];

      return {
        ...state,
        data: updatedEmployee,
      };
    }

    case actionTypes.SELECT_EMPLOYEE: {
      return {
        ...state,
        selectedEmployee: action.payload,
      };
    }

    default:
      return state;
  }
}
