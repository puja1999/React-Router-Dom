import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
// Route Nesting using useRouteMatch() hook
const Service = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>This is the Service Page</h2>
      <ul>
        <li>
          <Link to={`${url}/basic`}>Basic Service</Link>
        </li>
        <li>
          <Link to={`${url}/adv`}>Advance Service</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/basic`} component={BasicService} />
        <Route path={`${path}/adv`} component={AdvanceService} />
      </Switch>
    </div>
  );
};

function BasicService() {
  return (
    <div>
      <h2>Basic Serivce Details !!</h2>
    </div>
  );
}

function AdvanceService() {
  return (
    <div>
      <h2>Advance Service Details !!</h2>
    </div>
  );
}

export default Service;
