import Link from 'next/link';
import GuideImage from '../../components/GuideImage';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>The MIT Illuminations App & Arduino</h1>
        <div className={styles.author}>
          by <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Wire up your Arduino LEDs to the MIT Illuminations App</li>
          </ul>
        </div>
        <h2>Connecting an app to your LEDs</h2>
        <p>
          Earlier in this guide, we used some code to{' '}
          <Link href="/chapter/blink">blink an LED</Link> and{' '}
          <Link href="/chapter/chapter/ws2812b">
            control the WS2812b LED strip
          </Link>
          . Now, we're going to use the same Arduino Uno + WS2812b setup to
          display what we program within the MIT Illuminations app.
        </p>
        <p>
          The instructions here mirror the{' '}
          <a href="https://github.com/sosolimited/MIT-Illuminations">
            Getting Started Guide
          </a>{' '}
          on the MIT Illumination GitHub README file, with a couple of minor
          exceptions. This guide is specific to the components that we've been
          using throughout this project!
        </p>
        <h2>Hardware Setup</h2>
        <p>
          If you've been following along with the whole learn.illuminations
          guide, you should have the hardware setup ready to go from{' '}
          <Link href="/chapter/ws2812b">Chapter 5</Link>.
        </p>
        <p>
          If you're starting here, welcome! The setup of the Arduino Uno and the
          WS2812b LED strip is fairly simple. You need to connect 3 wires from
          the copper pads on the light strip into the Arduino pins. Double check
          to make sure you have these connections:
        </p>
        <ul>
          <li>
            LED Strip Power <span className={styles.pin}>5V</span> - Arduino{' '}
            <span className={styles.pin}>5V</span> (best practice: red wire)
          </li>
          <li>
            LED Strip Data <span className={styles.pin}>DI</span> - Arduino{' '}
            <span className={styles.pin}>PIN 4</span>
          </li>
          <li>
            LED Strip Ground <span className={styles.pin}>GND</span> - Arduino{' '}
            <span className={styles.pin}>GND</span> (best practice: black wire)
          </li>
        </ul>
        <h2>Arduino Configuration</h2>
        <p>
          To control the lights using the MIT Illuminations app, we need to add
          a bit of code to make sure the Arduino can communicate with the app
          smoothly.
        </p>
        <p>
          Open the Arduino IDE and copy the code from{' '}
          <a
            href="https://github.com/sosolimited/MIT-Illuminations/blob/master/arduino/illuminations.ino"
            target="_blank"
          >
            this link
          </a>{' '}
          into a brand new blank sketch.
        </p>
        <p>In the sketch, you'll want to check on 3 variables:</p>
        <ul>
          <li>
            Set <code>LED_COUNT</code> to the number of LEDs in your WS2812b LED
            strip (you may want to limit it to something like 24 if you have a
            long strand).
          </li>
          <li>
            <code>N_COLORS</code> should be 3 for 3 RGB units.
          </li>
          <li>
            Make sure <code>DATA_PIN</code> is set to 4 (since you're connecting
            the LED strip <span className={styles.pin}>Din</span> to{' '}
            <span className={styles.pin}>PIN 4</span> on the Arduino).
          </li>
        </ul>
        <p>
          Make sure you have your Arduino Uno selected within the IDE and click
          "Upload" to publish the code to your Arduino. After that, you can
          close the IDE, and your Arduino will remember and run this code every
          time it powers on. As long as your Arduino Uno is plugged into your
          computer via USB, it will always be ready to accept data from the MIT
          Illuminations app.
        </p>
        <h2>Setup on the MIT Illuminations App</h2>
        <ol>
          <li>Open the MIT Illuminations app.</li>
          <li>Click on "Settings", on the "General" tab.</li>
          <li>
            Set the number of lights and RGB value to match your LED strip (in
            our case, 24 lights in RGB).
          </li>
          <li>
            Click on the "Arduino/Serial" tab, and turn on "Enable Serial Port
            Output". Select your Arduino port from the list below.
            <ul>
              <li>
                On Windows, it'll start with something like: <code>COM...</code>
              </li>
              <li>
                On Mac, it'll start with something like:{' '}
                <code>/dev/tty...</code>
              </li>
            </ul>
          </li>
          <li>
            You'll know if your Arduino is receiving data correctly if you see a
            data light flickering constantly on the board while the MIT
            Illuminations app is running.
          </li>
        </ol>
        <h2>Run Some Shows!</h2>
        <p>
          If everything is working, your WS2812b LED strip should be lighting up
          and matching the preview shown in the MIT Illuminations app. You can
          start by editing some of the templates, or go wild and create your
          own. Have fun programming!
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
