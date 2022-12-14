import styles from '../../styles/Guide.module.scss';
import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';
import PageNavigationButtons from '../../components/PageNavigationButtons';

import cx from 'classnames';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>The Photoresistor</h1>
        <div className={styles.author}>
          by <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Use the Analog In pin on the Arduino</li>
            <li>
              Obtain a basic understanding of a simple variable resistor (the
              photoresistor)
            </li>
          </ul>
        </div>
        <h2>Adding Interactivity</h2>
        <p>
          Having the LED strip change based on the environment is a great way to
          add interactivity to your project - an example of this is light
          sensing (responding to different light levels).
        </p>
        <p>
          The photoresistor (or photocell) is a special type of resistor that
          changes in resistance when light shines on it. When there is{' '}
          <strong>more light</strong>, the resistance is <strong>lower</strong>.
          When there is <strong>less light</strong>, the resistance is{' '}
          <strong>higher</strong>. The specific amount of resistance depends on
          the specific component.{' '}
          <a
            href="https://www.instructables.com/Photoresistors/"
            target="_blank"
          >
            Instructables
          </a>{' '}
          has a great article that goes in depth on how photoresistors work.
        </p>
        <GuideImage
          src="/images/guide/photoresistor-closeup.jpg"
          size="MEDIUM"
          caption={"Hello! I'm a photoresistor!"}
        />
        <p>
          Photoresistors are non-polarized (no notion of{' '}
          <span className={cx(styles.sign, styles.positive)}>+</span> or{' '}
          <span className={cx(styles.sign, styles.negative)}>-</span>), meaning
          you can use it in either direction.
        </p>
        <p>
          One way to use the photoresistor is to create a voltage divider where
          one resistor is the photoresistor, and the other is a regular
          resistor, as seen in the diagram below. To value of A0 will change
          depending on the amount of light shining on the photoresistor.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-01.png"
          size="SMALL"
        />
        <p>
          The value (voltage) of Analog Pin 0{' '}
          <span className={styles.pin}>A0</span> is a fraction of 5 Volts. The
          voltage divider makes it such that the voltage at that point is:
        </p>
        <p className={styles.center}>
          <span className={styles.equation}>
            A0 = 5v &#215; (Regular ol' Resistor)/(Photoresistor + Regular ol'
            Resistor)
          </span>
        </p>
        <p>
          If you're not familiar with voltage dividers, take a moment to think
          about why that is. You can work it out using Ohm's law:{' '}
          <span className={styles.equation}>V = IR</span>. As an example, let's
          look at a voltage divider using a photo resistor with some values.
        </p>

        <GuideImage
          src="/images/guide/illuminations-seminar-02.png"
          size="MEDIUM"
        />
        <p>
          In this example, when the photoresistor is exposed to bright light,
          the resistance is 10k&#8486;, meani ng the top and bottom resistances
          are both 10k&#8486;, meaning that A0 is split right down the middle
          (half of 5V) which is <strong>2.5V</strong>.
        </p>
        <p>
          When the photoresistor is in darkness, the resistance is very large
          (100k&#8486;); the ratio is roughly 10:1 between the top resistance
          and the bottom resistance. Intuitively, this pushes A0 in value much
          closer to ground. If we do the math, it gives a reading of &lt; 0.5v.
        </p>
        <h2>Let's wire it up!</h2>
        <p>
          To wire this up, we'll use the 5V and the Gnd pins on the Arduino. One
          new pin we'll be using is the A0, the Analog pin. This pin allows us
          to take in values that are between 0 and 5v. The full documentation
          for <code>analogRead()</code> can be found on the{' '}
          <a
            href="https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/"
            target="_blank"
          >
            Arduino website here
          </a>
          . <code>analogRead(A0)</code> will give us a value range of between 0
          and 1024. Up until now, we've been dealing with digital inputs (just
          HIGH or LOW) - with this function, we can have much higher fidelity
          sensing. We'll use a 10k&#8486; resistor as the bottom resistor, and
          while the values of the photoresistor may not be exact, they're
          relatively easy to calibrate.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-03.png"
          size="MEDIUM"
        />
        <p>
          If you're unfamiliar with circuits, use this opportunity to see if you
          can wire the above schematic without looking at the photo of the
          example wiring below. Practice!
        </p>
        <GuideImage src="/images/guide/wiring-photoresistor.jpg" size="LARGE" />
        <p>
          Download the code{' '}
          <a href="/arduino/PhotoResistor/PhotoResistor.ino">here</a>.
        </p>
        <p>Take a moment to read through the code.</p>
        <p>
          Notice that in the code there are values for <code>light</code> and{' '}
          <code>dark</code>. we know <code>sensorValue</code> (the analogRead
          value) is going to be some range - let's find this range, and then map
          it from 0 to 1.
        </p>
        <p>
          Instead of doing <code>Serial.println(value)</code> statement, print
          the value of the raw <code>sensorValue</code> and play around with
          what you get. Shine a bright light at it, what is the number? Then
          cover it completely, and get that number. These are your light and
          dark values!
        </p>
        <p>
          Plug these new light and dark values in, and then print{' '}
          <code>value</code>. If you've done it correctly, you should now see
          value as a number between 0 and 1 based on the min and max brightness!
        </p>
        <h2>Make a Simple Light Meter!</h2>
        <p>
          Let's visualize the brightness with our LED strip! You{' '}
          <strong>do not need to cut your LED strip down for this demo!</strong>{' '}
          (we just happened to have a shorter LED strand. Try to reproduce this
          behavior: the brighter the environment is, the more LEDs are on. When
          it's completely dark, the LED strip follows suit and has 0 LEDs on.
        </p>
        <GuideImage src="/images/guide/photoresistor-tryit.gif" size="LARGE" />
        <p>
          Try to see if you can reproduce this effect!
          <br />
          Stuck? You can also download the code{' '}
          <a href="/arduino/PhotoResistor/PhotoResistor.ino">here</a>.
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
