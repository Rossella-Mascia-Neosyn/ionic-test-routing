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
import React, { useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router';

const Home = () => {
  const { authValues, logout } = React.useContext(AuthContext);
  const history = useHistory();

  const fetchData = async () => {
    const result = await fetch('https://randomuser.me/api/?page=1&results=20');
    console.log(result, 'result');
  }

  useIonViewWillEnter(() => {
    console.log('will enter Home');
    fetchData();
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

  useEffect(() => {
    console.log('useEffect Home');
    fetchData();

    return () => {
      console.log('unmount useEffect Home');
    }
  }, []);

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
