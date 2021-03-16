import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { User } from '@firebase/auth-types';

type PrivateRouteProps = {
  user: User | null;
  children: React.ReactNode;
  [x: string]: any;
};

const PrivateRoute = ({ user, children, ...rest }: PrivateRouteProps) => {
  console.log({ children });
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          if (React.isValidElement(children)) {
            return React.cloneElement(children, { user });
          }
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};

export default PrivateRoute;
