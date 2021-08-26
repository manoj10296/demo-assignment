import { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import List from "./List";
import axios from "axios";
import {
  fetchEmployeeFailure,
  fetchEmployeeInitiate,
  fetchEmployeeSuccess,
} from "../../redux/actions/employee";
import Navbar from "./Navbar";
import Settings from "./Settings";
import AddEdit from "./AddEdit";

const Console = () => {
  const route = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(fetchEmployeeInitiate());
      try {
        const apiData = await axios.get("https://api.github.com/users");
        dispatch(fetchEmployeeSuccess(apiData?.data || []));
      } catch (error) {
        dispatch(fetchEmployeeFailure(error));
      }
    })();
  }, [dispatch]);
  const { path } = route;
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={path} component={List} />
        <Route path={`${path}/settings`} component={Settings} />
        <Route path={`${path}/emp/:action`} component={AddEdit} />
      </Switch>
    </div>
  );
};

export default Console;
