import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from '@ionic/react';
import React, { useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const { login } = React.useContext(AuthContext);
  const history = useHistory();

  const doLogin = async () => {
    let result = await login({ password: 'aaron', user: 'aaron' });
    result && history.replace('/home');
  };

  useEffect(() => {
    console.log('useEffect LoginPage');
  }, [])

  useIonViewWillEnter(() => {
    console.log('will enter LoginPage');
  });
  useIonViewDidEnter(() => {
    console.log('did enter LoginPage');
  });

  useIonViewWillLeave(() => {
    console.log('will leave LoginPage');
  });
  useIonViewDidLeave(() => {
    console.log('did leave LoginPage');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
        <IonContent>
          <IonButton onClick={doLogin}>LOGIN</IonButton>
        </IonContent>
      </IonHeader>
    </IonPage>
  );
};
export default LoginPage;
