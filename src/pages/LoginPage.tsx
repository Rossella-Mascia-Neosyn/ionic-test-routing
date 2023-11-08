import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const { login } = React.useContext(AuthContext);
  const history = useHistory();

  const doLogin = async () => {
    let result = await login({ password: 'aaron', user: 'aaron' });
    result && history.replace('/tab1');
  };

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
