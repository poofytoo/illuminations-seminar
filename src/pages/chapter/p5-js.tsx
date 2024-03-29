import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>P5.js</h1>
        <h2>Coming Soon!</h2>
        <p>More information on this will be posted shortly.</p>
      </div>
    </div>
  );
};

export default Page;
