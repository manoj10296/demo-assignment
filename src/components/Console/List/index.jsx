import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteEmployee,
  selectEmployee,
} from "../../../redux/actions/employee";
import Card from "../common/Card";
import "./style.css";

const List = () => {
  const state = useSelector((state) => state.employeeReducer);
  const { data } = state;
  const history = useHistory();

  const dispatch = useDispatch();
  const deleteEmp = (id) => {
    dispatch(deleteEmployee(id));
  };

  const editEmp = (data) => {
    dispatch(selectEmployee(data));
    history.push("/console/emp/edit");
  };

  return (
    <div>
      <i
        className="fas fa-2x fa-plus-circle"
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/console/emp/add")}
      ></i>
      <div className="employee-list">
        {data.map((ele, i) => (
          <Card
            key={i}
            data={ele}
            deleteEmp={deleteEmp}
            detailsAction={editEmp}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
