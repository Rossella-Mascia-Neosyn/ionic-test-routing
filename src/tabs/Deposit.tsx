import { IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';

const Deposit = () => {
  useIonViewWillEnter(() => {
    console.log('will enter Deposit');
  });
  useIonViewDidEnter(() => {
    console.log('did enter Deposit');
  });

  useIonViewWillLeave(() => {
    console.log('will leave Deposit');
  });
  useIonViewDidLeave(() => {
    console.log('did leave Deposit');
  });
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Deposit</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>;
};

export default Deposit;
