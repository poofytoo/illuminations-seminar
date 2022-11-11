import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Hello!</h1>
        <h2>Welcome!</h2>
        <p>This is the learning guide for the MIT Illuminations project.</p>
        <h2>What is it?</h2>
        <h2>How to use this Learning Guide</h2>
      </div>
    </div>
  );
};

export default Page;
