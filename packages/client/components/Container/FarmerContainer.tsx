import { useState } from 'react';

import TokenizeForm from '../Form/TokenizeForm';
import ViewBuyersForm from '../Form/ViewBuyersForm';
import styles from './FarmerContainer.module.css';

// 農家が触るUIのベースとなる
// activeTabを変更することで表示する内容がTokenize or ViewBuyersのどちらかに変更できる
export default function FarmerContainer() {
  // farmer actions
  const Tokenize = 'Tokenize';
  const ViewBuyers = 'ViewBuyers';

  const [activeTab, setActiveTab] = useState(Tokenize);

  return (
    <div>
      <div className={styles.selectTab}>
        <div
          className={
            styles.tabStyle +
            ' ' +
            (activeTab === Tokenize ? styles.activeTab : '')
          }
          onClick={() => setActiveTab(Tokenize)}
        >
          {Tokenize}
        </div>
        <div
          className={
            styles.tabStyle +
            ' ' +
            (activeTab === ViewBuyers ? styles.activeTab : '')
          }
          onClick={() => setActiveTab(ViewBuyers)}
        >
          {ViewBuyers}
        </div>
      </div>
      <div className={styles.tabBody}>
        {activeTab === Tokenize && <TokenizeForm />}
        {activeTab === ViewBuyers && <ViewBuyersForm />}
      </div>
    </div>
  );
}
