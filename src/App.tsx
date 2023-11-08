import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';

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
          <IonTabs>
            <IonRouterOutlet>
              {/* specify route to each of teh tabs*/}
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />

              {/* default route is to tab1 */}
              <Route
                path="/"
                render={() => <Redirect to="/tab1" />}
                exact={true}
              />
            </IonRouterOutlet>
            {/* draw what the tab bar should look like*/}
            <IonTabBar slot="bottom">
              <IonTabButton tab={'tab1'} href={'/tab1'}>
                <IonLabel>{'Tab One'}</IonLabel>
              </IonTabButton>
              <IonTabButton tab={'tab2'} href={'/tab2'}>
                <IonLabel>{'Tab Two'}</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
