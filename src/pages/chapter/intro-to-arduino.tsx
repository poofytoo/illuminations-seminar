import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Intro to Arduino!</h1>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Be introduced to the notion of microcontrollers</li>
            <li>Understand the capabilities of an Arduino</li>
          </ul>
        </div>
        <h2>Coming Soon!</h2>
      </div>
    </div>
  );
};

export default Page;
