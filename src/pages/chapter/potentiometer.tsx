import styles from '../../styles/Guide.module.scss';
import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';
import PageNavigationButtons from '../../components/PageNavigationButtons';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>The Potentiometer</h1>
        <div className={styles.author}>
          by <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <p>
          Preview:{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/potentiometer">
            https://learn.illuminations.mit.edu/chapter/potentiometer
          </a>
        </p>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Obtain a basic understanding of a potentiometer</li>
          </ul>
        </div>
        <h2>Pots!</h2>
        <p>
          A potentiometer (affectionately known as a pot) is a three-terminal
          resistor, which basically means it's another one of those components
          that can change how easily electricity can flow within a circuit. We
          talk more about resistors (and specifically photoresistors) in{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/analog-in">
            Chapter 11
          </a>
          .
        </p>
        <p>
          Specifically, a potentiometer can also act as a voltage divider, which
          is where you use one or multiple resistors to convert a larger voltage
          into a smaller one. And pots have a sliding or rotating part that lets
          you adjust how much resistance you want it to have.
        </p>
        <GuideImage
          src="/images/guide/pot-top.jpeg"
          size="MEDIUM"
          caption={"Hello! I'm a potentiometer!"}
        />
        <p>
          To draw a resistor in a circuit diagram, we use that same zig-zag
          symbol. But remember: there are three pins, not two! So it's important
          to capture all three of those pins in our diagram.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-04.png"
          size="LARGE"
        />
        <p>
          Pins 1 and 3 are the ends of the resistor. When we say a 10k&#937;
          potentiometer, we mean that the max resistance (between pins 1 and 3)
          is that value. In the case of this potentiometer, which has a knob, we
          can rotate the knob to create different resistances in between pins 1
          and 2 and pins 2 and 3 &mdash; kind of like turning this one resistor
          into two separate but connected resistors.
        </p>
        <p>
          As we rotate the knob counterclockwise (paying attention to the little
          arrow indicated on the knob), towards{' '}
          <span className={styles.pin}>PIN 1</span>, the point of contact of
          <span className={styles.pin}>PIN 2</span> shifts closer to{' '}
          <span className={styles.pin}>PIN 1</span>. This decreases the
          resistance between 1 and 2 and increases the resistance between 2 and
          3.
        </p>
        <p>
          So if we rotate all the way counterclockwise, the resistance between 1
          and 2 is very small (close to 0k&#937;) and the resistance between 2
          and 3 is close to the max value (10k&#937;).
        </p>
        <p>
          The opposite is true if we rotate all the knob clockwise, towards pin
          3. The point of contact of <span className={styles.pin}>PIN 2</span>{' '}
          shifts closer to <span className={styles.pin}>PIN 3</span>, which
          increases the resistance between 1 and 2 and decreases the resistance
          between 2 and 3.{' '}
        </p>
        <h2>Let's wire it up!</h2>
        <p>
          Notice how the pins are spaced out at the bottom of the potentiometer.
          This is designed to make it easier to go into a breadboard.{' '}
        </p>
        <GuideImage src="/images/guide/pot-bottom.jpeg" size="SMALL" />
        <p>
          When you place it in the breadboard holes (or points, as we've been
          calling them throughout this guide), make sure each pin is in its own
          row.
        </p>
        <p>
          Remember, each horizontal row connects all five points within it. So
          having each pin in a separate row means that we can connect parts of
          our circuit to <span className={styles.pin}>PIN 1</span>,{' '}
          <span className={styles.pin}>PIN 2</span>, and{' '}
          <span className={styles.pin}>PIN 3</span> of our potentiometer. That
          separation lets us take full advantage of this component as a voltage
          divider, and play around with turning the knob to create that variable
          resistance between different pins.
        </p>
        <GuideImage src="/images/guide/pot-breadboard.jpeg" size="MEDIUM" />
        <p>
          To wire this up, we'll follow the circuit diagram below and use a
          breadboard, our potentiometer, and our trusty Arduino Uno. Just like
          we did with the photoresistor, we'll want to make connections with 3
          pins on the Arduino:
        </p>
        <ul>
          <li>
            <span className={styles.pin}>PIN 1</span> or{' '}
            <span className={styles.pin}>PIN 3</span> - Arduino{' '}
            <span className={styles.pin}>5V</span> (best practice: red wire)
          </li>
          <li>
            <span className={styles.pin}>PIN 2</span> -{' '}
            <span className={styles.pin}>A0</span>, Arduino Analog In
          </li>
          <li>
            <span className={styles.pin}>PIN 1</span> or{' '}
            <span className={styles.pin}>PIN 3</span> - Arduino{' '}
            <span className={styles.pin}>GND</span> (best practice: black wire)
          </li>
        </ul>
        <p>
          It doesn't matter if <span className={styles.pin}>PIN 1</span> is
          connected to <span className={styles.pin}>5V</span> or{' '}
          <span className={styles.pin}>GND</span>, as long as{' '}
          <span className={styles.pin}>PIN 3</span> is connected to the other.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-05.png"
          size="MEDIUM"
        />
        <p>
          To get some practice with circuits, use this opportunity to see if you
          can wire the above schematic on your own. If you get stuck or once
          you're done, look at the example wiring below to compare or contrast
          your strategy.
        </p>
        <GuideImage src="/images/guide/pot-wiring.jpeg" size="LARGE" />
        <h2>Time for Code!</h2>
        <p>
          Open up a new sketch in your Arduino IDE, and try to get the value of{' '}
          <span className={styles.pin}>A0</span> by using the{' '}
          <code>analogRead()</code> function we used in the{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/analog-in">
            previous chapter
          </a>
          .
        </p>
        <p>
          Because the potentiometer isn't sensing the environment, we don't have
          variable dark or light inputs, and you won't need to
          calibrate/normalize the values this time . The sensorValue (the{' '}
          <code>analogRead</code> value) depends on the different resistances
          between <span className={styles.pin}>PIN 1</span> and{' '}
          <span className={styles.pin}>PIN 2</span> compared to{' '}
          <span className={styles.pin}>PIN 2</span> and{' '}
          <span className={styles.pin}>PIN 3</span>. You should should be able
          to directly print the value of <span className={styles.pin}>A0</span>{' '}
          it out to <code>Serial.printIn()</code>.
        </p>
        <p>
          If you get stuck trying to write this from scratch, try copying and
          pasting the code from the previous section and modifying it to work
          with the potentiometer.
        </p>
        <p>
          Once you think you have the code working and outputting values that
          make sense for <span className={styles.pin}>A0</span>, try turning the
          knob and watch the value change. What is the range? Does this make
          sense to you? (Remember which Arduino pins we connected to our
          potentiometer pins, and what a voltage divider does!)
        </p>
        <h2>What can you do with lights?</h2>
        <p>
          Now that we know our potentiometer is working with the Arduino, we can
          connect an LED strip! Potentiometers have lots of different real-world
          applications. Often, they're used to finely control or adjust values.
        </p>
        <p>
          If you've been following along with this guide, you've connected a
          WS2812b LED strip directly to the arduino already in{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/ws2812b">
            Chapter 5
          </a>
          . This time, it's slightly different because we have a breadboard in
          the mix.{' '}
        </p>
        <p>
          We'll have to make 3 connections between the Arduino Uno pins (or the
          row of the breadboard where the pin is connected in the case of the{' '}
          <span className={styles.pin}>5V</span>
          and <span className={styles.pin}>GND</span>) and the copper pads at
          the end of the LED strip. Double check to make sure you have these
          connections:{' '}
        </p>
        <ul>
          <li>
            LED Strip Power <span className={styles.pin}>5V</span> - Arduino{' '}
            <span className={styles.pin}>5V</span> (best practice: red wire)
          </li>
          <li>
            LED Strip <span className={styles.pin}>DIn</span> - Arduino{' '}
            <span className={styles.pin}>PIN 4</span>
          </li>
          <li>
            LED Strip <span className={styles.pin}>GND</span> - Arduino{' '}
            <span className={styles.pin}>GND</span> (best practice: black wire)
          </li>
        </ul>
        <p>
          This is another great moment to practice your coding skills and play
          around. Right now, we're going to use the potentiometer to adjust the
          speed of this LED chase effect.
        </p>

        <p>
          Play around with your code and the FastLED library to see if you can
          get the LED chase to change speed based on the potentiometer! Try to
          reproduce the behavior in this .gif:
        </p>
        <GuideImage src="/images/guide/pot-speed.gif" size="LARGE" />
        <p>
          If you're stuck, copy and paste the code [below/from this link] into
          your Arduino IDE.{' '}
        </p>
        <p>
          <br />
          Stuck? You can also download the code{' '}
          <a href="/arduino/PotLights/PotLights.ino">here</a>.
        </p>
        <p>In the Arduino IDE sketch, you'll want to check on 3 variables:</p>
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
            the LED strip Din to <span className={styles.pin}>PIN 4</span> on
            the Arduino).
          </li>
        </ul>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
