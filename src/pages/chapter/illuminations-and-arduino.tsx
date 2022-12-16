import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Illuminations & Arduino</h1>
        <div className={styles.author}>
          <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Wire up your Arduino LEDs to the Illluminations App</li>
          </ul>
        </div>
        <h2>Overview</h2>
        <p>
          If you've been playing around with the Illuminations app, you'll
          notice that there are some pretty nifty things you can do with P5.js.
          One thing that's possible to do with the Illuminations app is to
          directly send what you program on that app and use your Arduino +
          WS2812b setup to display it.
        </p>
        <p>
          The instructions here mirror the{' '}
          <a href="https://github.com/sosolimited/MIT-Illuminations">
            Getting Started Guide
          </a>{' '}
          on the Illumination's GitHub readme, with a couple of minor
          exceptions.
        </p>
        <h2>Hardware Setup</h2>
        <p>
          The setup of the Arduino and the WS2812b strips is very easy. There
          are 3 wires from the light strip that needs to go into the Arduino.
          Double check to make sure:
        </p>
        <ul>
          <li>LED Strip Power 5V - Arduino 5V</li>
          <li>LED Strip Data (DI) - Arduino Digital Pin 4</li>
          <li>LED Strip Ground - Arduino Ground</li>
        </ul>
        <h2>Arduino Configuration</h2>
      </div>
    </div>
  );
};

export default Page;
