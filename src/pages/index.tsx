import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.centerContent}>
        <h1>Hello!</h1>
        <p>
          This is the future website for the 2022 MIT Illuminations First-year Seminar. Check back
          here for more information soon!
        </p>
      </div>
    </div>
  );
};

export default Home;
