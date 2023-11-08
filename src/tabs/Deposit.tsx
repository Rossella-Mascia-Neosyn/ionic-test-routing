import { IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useEffect } from 'react';

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
  useEffect(() => {
    console.log('useEffect Deposit');

    return () => {
      console.log('unmount useEffect Deposit');
    }
  }, []);
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Deposit</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>;
};

export default Deposit;
