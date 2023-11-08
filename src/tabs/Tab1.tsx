import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from '@ionic/react';
import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router';

const Tab1 = () => {
  const { authValues, logout } = React.useContext(AuthContext);
  const history = useHistory();

  useIonViewWillEnter(() => {
    console.log('will enter');
  });
  useIonViewDidEnter(() => {
    console.log('did enter');
  });

  useIonViewWillLeave(() => {
    console.log('will leave');
  });
  useIonViewDidLeave(() => {
    console.log('did leave');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
        <IonContent>
          <div>{JSON.stringify(authValues.user)}</div>
          <IonButton
            onClick={() => {
              logout();
              history.replace('/login');
            }}
          >
            LOGOUT
          </IonButton>
        </IonContent>
      </IonHeader>
    </IonPage>
  );
};

export default Tab1;
