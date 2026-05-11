import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WorkDetail from "./pages/WorkDetail";
import WorksList from "./pages/WorksList";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/works" component={WorksList} />
      <Route path="/works/:slug" component={WorkDetail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <Routes />
    </Router>
  );
}
