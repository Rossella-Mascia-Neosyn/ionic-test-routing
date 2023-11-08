import { IonButton, IonIcon, IonLabel, IonSegment, IonSegmentButton, useIonRouter } from '@ionic/react';
import { call, heart, pin } from 'ionicons/icons';
import { FC } from 'react'
import { useHistory, useLocation } from 'react-router';

export type MyTabsProps = {

}

const MyTabs: FC<MyTabsProps> = () => {
  const testHistory = useHistory();
  const location = useLocation();
  const goToPage = (path: string) => testHistory.push(path);

  const hiddenRoutes = ['/account', '/account/edit-account'];
  const removeParams = '/' + location.pathname.split('/')[1];
  const isHiddenRoute = hiddenRoutes.includes(removeParams);

  return (
    !isHiddenRoute && <IonSegment value={location.pathname.split('/')[1]} style={{ position: 'fixed', bottom: '0' }}>
      <IonSegmentButton value="home" onClick={() => goToPage('/home')}>
        <IonLabel>Home</IonLabel>
        <IonIcon icon={call}></IonIcon>
      </IonSegmentButton>
      <IonSegmentButton value="deposit" onClick={() => goToPage('/deposit')}>
        <IonLabel>Depositati</IonLabel>
        <IonIcon icon={heart}></IonIcon>
      </IonSegmentButton>
      <IonSegmentButton value="pick-up" onClick={() => goToPage('/pick-up')}>
        <IonLabel>Prelevati</IonLabel>
        <IonIcon icon={pin}></IonIcon>
      </IonSegmentButton>
    </IonSegment>
  )
};

export default MyTabs;