import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './TopBar.module.scss';
import cx from 'classnames';

const TopBar = () => {
  return (
    <>
      <div className={styles.topBar}></div>
      <div className={styles.topBar2}>
        <Link href={'/chapter/hello'}>
          <div className={styles.home}>learn.illluminations</div>
        </Link>
      </div>
    </>
  );
};

export default TopBar;
