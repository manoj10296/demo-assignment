import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  addEmployee,
  editEmployee,
  selectEmployee,
} from "../../../redux/actions/employee";

const AddEdit = () => {
  const params = useParams();
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const state = useSelector((state) => state.employeeReducer);

  // const { selectedEmployee } = state;
  console.log(state);
  const { action } = params;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (action === "edit") {
      setName(state?.selectedEmployee?.login || "def");
      setPic(
        state?.selectedEmployee?.avatar_url ||
          `https://robohash.org/${Math.random()}.png

      `
      );
    }
  }, []);

  const onSubmit = () => {
    if (name.length === 0) {
      alert("name is required.");
      return;
    }
    if (pic.length === 0) {
      alert("picture is required.");
      return;
    }
    if (action === "edit") {
      const emp = { ...state.selectedEmployee, login: name, avatar_url: pic };
      dispatch(editEmployee(emp));
      history.push("/console");
    } else {
      const emp = {
        id: Math.random(),
        login: name,
        avatar_url: pic,
      };
      dispatch(addEmployee(emp));
      history.push("/console");
    }
  };

  return (
    <div>
      <label className="mx-4 mb-5">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <label className="mx-4">PIC URL</label>
        <input
          type="text"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        />
      </div>
      <button type="button" class="btn btn-primary mt-5 " onClick={onSubmit}>
        {action === "edit" ? "Edit" : "Save"}
      </button>
    </div>
  );
};

export default AddEdit;
