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

const Home = () => {
  const { authValues, logout } = React.useContext(AuthContext);
  const history = useHistory();

  useIonViewWillEnter(() => {
    console.log('will enter Home');
  });
  useIonViewDidEnter(() => {
    console.log('did enter Home');
  });

  useIonViewWillLeave(() => {
    console.log('will leave Home');
  });
  useIonViewDidLeave(() => {
    console.log('did leave Home');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>{JSON.stringify(authValues.user)}</div>
        <IonButton
          onClick={() => {
            history.push('/account');
          }}
        >
          Account
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
