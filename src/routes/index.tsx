import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Workspace from '../pages/Workspace';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Workspace} />
    </Switch>
  );
};

export default Routes;
