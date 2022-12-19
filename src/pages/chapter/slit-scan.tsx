import Link from 'next/link';
import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Slit Scan</h1>
        <h2>Coming Soon!</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Page;
