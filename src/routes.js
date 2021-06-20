import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import EmailSent from './pages/EmailSent';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/entrar" component={Login} />
        <Route exact path="/mudar-senha" component={ForgotPassword} />
        <Route exact path="/email-enviado" component={EmailSent} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}