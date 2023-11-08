import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonButton, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from 'react';
import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/AuthContext';
import Home from './tabs/Home';
import AccountPage from './pages/AccountPage';
import EditAccount from './pages/EditAccount';
import MyTabs from './components/MyTabs';
import Deposit from './tabs/Deposit';
import PickUp from './tabs/PickUp';

setupIonicReact();

const App: React.FC = () => {
  const { authValues } = React.useContext(AuthContext);

  return (
    <IonApp>
      {!authValues.authenticated ? (
        <IonReactRouter>
          <Route path="/login" component={LoginPage} exact={true} />
          <Route
            path="/"
            render={() => <Redirect to="/login" />}
            exact={true}
          />
          <Route
            path="*"
            render={() => <Redirect to="/login" />}
            exact={true}
          />
        </IonReactRouter>
      ) : (
        <IonReactRouter>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/account" component={AccountPage} exact={true} />
          <Route path="/account/edit-account" component={EditAccount} exact={true} />
          <Route path="/deposit" component={Deposit} exact={true} />
          <Route path="/pick-up" component={PickUp} exact={true} />
          <MyTabs />
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
