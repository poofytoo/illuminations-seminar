import Sidebar from '../components/Sidebar';

import styles from '../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Buttons & Inputs</h1>
        <h2>Coming Soon!</h2>
      </div>
    </div>
  );
};

export default Page;
