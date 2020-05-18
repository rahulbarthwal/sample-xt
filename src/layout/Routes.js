import React from 'react';
import Loadable from 'react-loadable';

import { Switch, Route } from 'react-router-dom';

const CharacteListPage = Loadable({
  loader: () => import('../pages/CharacterListPage'),
  loading: () => <div>Loading...</div>
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CharacteListPage} />
    </Switch>
  );
};

export default Routes;
