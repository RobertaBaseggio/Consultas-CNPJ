import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Start from '../pages/Start';
import Paises from '../pages/paises';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Start} />;
    <Route path="/brazil/uf" exact component={Home} />;
    <Route path="/countries" exact component={Paises} />;
  </Switch>
);

export default Routes;
