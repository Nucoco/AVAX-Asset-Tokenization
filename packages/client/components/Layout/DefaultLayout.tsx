import Link from 'next/link';
import { ReactNode, useContext } from 'react';

import CurrentAccountContext from '../../context/CurrentAccountProvider';
import styles from './DefaultLayout.module.css';

type Props = {
  children: ReactNode;
  home?: boolean;
};

// 全てのページのレイアウトとなるコンポーネントです。
// はじめにCurrentAccountContextからcurrentAccountとconnectWalletを取得しています。
// currentAccountにユーザのアドレスが保存されていればUI画面右上にアドレスを表示し、 未定義ならconnectWalletを実行するボタンを表示します。
export default function DefaultLayout({ children, home }: Props) {
  const [currentAccount, connectWallet] = useContext(CurrentAccountContext);

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.rightHeader}>
          <div className={styles.appName}> Asset Tokenization </div>
        </div>
        {currentAccount === undefined ? (
          <div className={styles.connectBtn} onClick={connectWallet}>
            {' '}
            Connect to wallet{' '}
          </div>
        ) : (
          <div className={styles.connected}>
            {' '}
            {'Connected to ' + currentAccount}{' '}
          </div>
        )}
      </div>
      <div>{children}</div>
      {!home && (
        <Link href="/">
          <div className={styles.backToHome}>Back to home</div>
        </Link>
      )}
    </div>
  );
}
