import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react"
import { useEffect } from "react";
import { useHistory } from "react-router";

const EditAccount = () => {
  const history = useHistory();
  useIonViewWillEnter(() => {
    console.log('will enter EditAccount');
  });
  useIonViewDidEnter(() => {
    console.log('did enter EditAccount');
  });

  useIonViewWillLeave(() => {
    console.log('will leave EditAccount');
  });
  useIonViewDidLeave(() => {
    console.log('did leave EditAccount');
  });
  useEffect(() => {
    console.log('useEffect EditAccount');
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Account</IonTitle>
        </IonToolbar>
        <IonButton
          onClick={() => {
            history.go(-1);
          }}
        >
          Go back
        </IonButton>
      </IonHeader>
      <IonContent>
        <p>edit account</p>

      </IonContent>
    </IonPage>
  )
}

export default EditAccount;