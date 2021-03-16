import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/private-route';

import * as ROUTES from './constants/routes';
import UserContext from './contexts/userContext';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));
const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <PrivateRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
