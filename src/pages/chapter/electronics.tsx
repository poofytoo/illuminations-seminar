import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Basics of Electronics</h1>
        <h2>An Introductory Spark</h2>
        <p>
          To get a sense of how the lights in Illuminations work, let's start
          with something
        </p>
      </div>
    </div>
  );
};

export default Page;
