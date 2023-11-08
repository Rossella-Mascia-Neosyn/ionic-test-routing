import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react"
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";

const AccountPage = () => {
  const history = useHistory();
  const { authValues, logout } = React.useContext(AuthContext);

  useIonViewWillEnter(() => {
    console.log('will enter AccountPage');
  });
  useIonViewDidEnter(() => {
    console.log('did enter AccountPage');
  });

  useIonViewWillLeave(() => {
    console.log('will leave AccountPage');
  });
  useIonViewDidLeave(() => {
    console.log('did leave AccountPage');
  });
  useEffect(() => {
    console.log('useEffect AccountPage');
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
        <IonButton
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </IonButton>
      </IonHeader>
      <IonContent>
        <p>my account</p>
        <IonButton
          onClick={() => {
            history.push('/tab1/account/edit-account');
          }}
        >
          Edit Account
        </IonButton>
        <IonButton
          onClick={async () => {
            await logout();
            history.replace('/login');
          }}
        >
          LOGOUT
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default AccountPage;