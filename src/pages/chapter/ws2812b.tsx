import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>WS2812b LEDs</h1>
        <div className={styles.author}>
          By Thiago Veloso de Souza &{' '}
          <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>
              Understand the idea behind individually addressable LED strips
            </li>
            <li>Light up the WS2812b LED strips using the Arduino</li>
          </ul>
        </div>
        <h2>Coming Soon!</h2>
      </div>
    </div>
  );
};

export default Page;
