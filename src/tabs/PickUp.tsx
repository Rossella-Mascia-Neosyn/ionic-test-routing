import { IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';

const PickUp = () => {
  useIonViewWillEnter(() => {
    console.log('will enter PickUp');
  });
  useIonViewDidEnter(() => {
    console.log('did enter PickUp');
  });

  useIonViewWillLeave(() => {
    console.log('will leave PickUp');
  });
  useIonViewDidLeave(() => {
    console.log('did leave PickUp');
  });
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>PickUp</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>;
};

export default PickUp;
