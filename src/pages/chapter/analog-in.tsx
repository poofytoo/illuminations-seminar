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
        <p>
          Preview:{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/analog-in">
            https://learn.illuminations.mit.edu/chapter/analog-in
          </a>
        </p>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>
              Obtain a basic understanding of a simple variable resistor (the
              photoresistor)
            </li>
            <li>Use the Analog In pin on the Arduino</li>
          </ul>
        </div>
        <h2>Adding Interactivity</h2>
        <p>
          If you've been following along with this guide, so far we've made our
          WS2812b LED strips to display various light colors and animations
          programmatically. Whatever we tell the lights to do, they'll do. But
          that's just the beginning of what we can accomplish with simple
          electronics!
        </p>
        <p>
          We can add interactivity to this project by having the LED strip
          change based on the environment, such as by responding to different
          light levels.
        </p>

        <p>
          To do this, we'll use a component called the{' '}
          <strong>photoresistor</strong> (or <strong>photocell</strong>). It's a
          type of resistor, which basically means it can change how easily
          electricity can flow within a circuit. Using the same “water in a
          pipe” metaphor as the{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/electronics">
            electronics chapter
          </a>
          , imagine resistance as some sort of gate or block in the middle of
          the pipe. More resistance means it's harder for electricity (or
          metaphorical water) to flow, and less resistance means it's easier.
        </p>

        <p>
          A photoresistor specifically changes in resistance when light shines
          on it, though the specific amount of resistance depends on the
          component.{' '}
          <a href="https://www.instructables.com/Photoresistors/">
            Instructables has a great article
          </a>{' '}
          that goes in depth on how photoresistors work.
        </p>

        <p>
          In general, the key thing to know about photoresistors is: when there
          is more light, the resistance is lower. And when there is less light,
          the resistance is higher.
        </p>
        <GuideImage
          src="/images/guide/photoresistor-closeup.jpg"
          size="MEDIUM"
          caption={"Hello! I'm a photoresistor!"}
        />
        <h2>Using Photoresistors in a Circuit</h2>
        <p>
          Most resistors, including photoresistors, are non-polarized (no notion
          of <span className={cx(styles.sign, styles.positive)}>+</span> or{' '}
          <span className={cx(styles.sign, styles.negative)}>-</span>), meaning
          you can add them to a circuit in either direction. To draw a resistor
          in a circuit diagram, we use a zig-zag symbol.
        </p>
        <GuideImage
          src="/images/guide/resistor-symbol.png"
          size="TINY"
          border={false}
        />
        <p>
          One way to use a photoresistor in the circuit is to create a{' '}
          <strong>voltage divider</strong>, which is where you use one or
          multiple resistors to convert a larger voltage into a smaller one.
          What's great is that you can calculate exactly how much you expect the
          voltage to decrease at various points in the circuit.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-01.png"
          size="SMALL"
        />
        <p>
          Above you'll see a circuit diagram of a voltage divider with two
          resistors. The top resistor is the photoresistor, and the other is a
          regular resistor. The power source, in this case, is 5 Volts (5V). And
          we also have a ground (<span className={styles.pin}>GND</span>).{' '}
        </p>
        <p>
          The last new thing on this circuit diagram is{' '}
          <span className={styles.pin}>A0</span>, which represents the Analog In
          pin of our Arduino. This pin can take in values that are between 0 and
          5V. And because this is a voltage divider, the voltage of{' '}
          <span className={styles.pin}>A0</span>
          is a fraction of 5 Volts.
        </p>
        <p>
          Specifically, we can calculate the voltage fraction at that point with
          this equation:
        </p>
        <p className={styles.center}>
          <span className={styles.equation}>
            A0 = 5V &#215; (Regular ol' Resistor)/(Photoresistor + Regular ol'
            Resistor)
          </span>
        </p>
        <p>
          If you're not familiar with voltage dividers, take a moment to think
          about why that is. You may be able to work it out using Ohm's law:{' '}
          <span className={styles.equation}>V = IR</span>. If you need help,
          check out{' '}
          <a href="https://learn.sparkfun.com/tutorials/voltage-dividers/all">
            Voltage Divider Tutorial
          </a>{' '}
          from SparkFun.
        </p>

        <p>
          To get a better sense of how this voltage divider might work, let's
          apply some specific values to our circuit diagram.
        </p>

        <GuideImage
          src="/images/guide/illuminations-seminar-02.png"
          size="MEDIUM"
        />
        <p>
          In the above example, when the photoresistor is exposed to bright
          light, the resistance is 10k&#8486;, meaning the top and bottom
          resistances are both 10k&#8486; So when there's bright light shining
          on the photoresistor, tthe top and bottom resistances are both
          10k&#8486;.
        </p>
        <p>
          Our equation <span className={styles.pin}>A0</span> = 5V &times;
          (Regular ol' Resistor)/(Photoresistor + Regular ol' Resistor) becomes{' '}
          <span className={styles.pin}>A0</span> = 5V &times;
          10k&#937;/20k&#937;. So <span className={styles.pin}>A0</span> is
          exactly half of 5V, which is 2.5V.
        </p>
        <p>
          When the photoresistor is in darkness, the resistance is very large
          100k&#937;, while the Regular ol' Resistor stays the same.
          Intuitively, we can see that the ratio is roughly 10:1 between the top
          resistance and the bottom resistance, which pushes{' '}
          <span className={styles.pin}>A0</span> in value much closer to ground
          (0V).
        </p>

        <p>
          If we do the math, <span className={styles.pin}>A0</span> = 5V &times;
          (Regular ol' Resistor)/(Photoresistor + Regular ol' Resistor) becomes{' '}
          <span className={styles.pin}>A0</span> = 5V &times;
          10k&#937;/110k&#937;. So <span className={styles.pin}>A0</span> is
          0.5V
        </p>
        <p>
          The values of our photoresistor in practice may not be exactly this,
          but they're relatively easy to calibrate once we build this voltage
          divider in real life. And now that we've developed intuition about how
          we expect it to work, we can get wiring.
        </p>
        <h2>Let's wire it up!</h2>
        <p>
          To wire this up, we'll follow the circuit diagram below and use a
          breadboard, a photoresistor, a 10k&#937; regular ol' resistor, and our
          trusty Arduino Uno. Specifically, we'll want to use 3 pins on the
          Arduino:
        </p>
        <ul>
          <li>
            <span className={styles.pin}>5V</span> is Arduino{' '}
            <span className={styles.pin}>5V</span> (best practice: red wire)
          </li>
          <li>
            <span className={styles.pin}>A0</span> is Arduino Analog In
          </li>
          <li>
            <span className={styles.pin}>GND</span> is Arduino{' '}
            <span className={styles.pin}>GND</span> (best practice: black wire)
          </li>
        </ul>
        <p>
          Note that we're not adding LEDs to the system yet! First, we want to
          make sure the Analog In pin is working and calibrated. The full
          documentation for <code>analogRead()</code> can be found on the{' '}
          <a href="https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/">
            Arduino website
          </a>
          . <code>analogRead(A0)</code> will give us a value range of between 0
          and 1024.{' '}
        </p>
        <p>
          Up until now, we've been dealing with digital inputs (just HIGH or
          LOW). - with this <code>analogRead()</code> function, we can have much
          higher fidelity sensing.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-03.png"
          size="MEDIUM"
        />
        <p>
          To get some practice with circuits, use this opportunity to see if you
          can wire the above schematic on your own. If you get stuck or once
          you're done, look at the photo of the example wiring below to compare
          or contrast your strategy.
        </p>
        <GuideImage src="/images/guide/wiring-photoresistor.jpg" size="LARGE" />
        <h2>Uploading Code & Calibrating the Photoresistor</h2>
        <p>
          In order to calibrate the photoresistor and use the{' '}
          <code>analogRead()</code>
          function, copy and paste the code below into your Arduino IDE.
        </p>
        <p>
          Download the code{' '}
          <a href="/arduino/PhotoResistor/PhotoResistor.ino">here</a>.
        </p>
        <p>
          Take a moment to read through the code. Notice that in the code there
          are values for <code>dark</code> and <code>light</code>. The
          <code>sensorValue</code> (the <code>analogRead</code> value) is going
          to be some range depending on how the photoresistor senses the
          darkness and light in your room. So to calibrate the photoresistor,
          let's test this range, and then map the darkest dark to 0 and
          brightest light 1.
        </p>
        <p>
          This is a great moment to practice your coding skills! Use this
          opportunity to see if you can calibrate the photoresistor based on the
          goals we laid out above. If you need some help, we've broken down the
          process into some concrete steps:{' '}
        </p>
        <ol>
          <li>
            <code>The Serial.printIn(value)</code> statement isn't useful to us
            for calibration. Instead, change it to Serial.printIn(sensorValue)
            to print what <span className={styles.pin}>A0</span> is detecting,
            which should be between 0 and 1024.
          </li>
          <li>
            Cover the photoresistor completely so the resistance raises up to
            the maximum amount for your current setup. See what value the code
            prints – that's your dark value!
          </li>
          <li>
            Shine a bright light at the photoresistor so the resistance drops to
            the lowest amount for your current setup. See what value the code
            prints – that's your light value!
          </li>
          <li>
            Change the float dark and float light values to the numbers you just
            measured.
          </li>
          <li>
            Change the <code>Serial.printIn()</code> line back to{' '}
            <code>Serial.printIn(value)</code>
            because your photoresistor is calibrated.
          </li>
        </ol>
        <p>
          If you've done everything correctly, the code should now be outputting
          a number between 0 and 1 depending on how much light the photoresistor
          is sensing!
        </p>
        <h2>Make a Simple Light Meter!</h2>
        <p>
          Now that we know our photoresistor is calibrated and working with the
          Arduino, we can connect an LED strip and have some fun! Let's
          visualize the brightness of light on our photoresistor with our LED
          strip. (Note: You do not need to cut your LED strip down for this
          demo, we just happened to have a shorter LED strand.)
        </p>

        <p>
          If you've been following along with this guide, you've connected a
          WS2812b LED strip directly to the arduino already in Chapter 5. This
          time, it's slightly different because we have a breadboard in the mix.{' '}
        </p>

        <p>
          We'll have to make 3 connections between the Arduino Uno pins (or the
          row of the breadboard where the pin is connected in the case of the{' '}
          <span className={styles.pin}>5V</span>
          and <span className={styles.pin}>GND</span>) and the copper pads at
          the end of the LED strip. Double check to make sure you have these
          connections:
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
          around. Try to reproduce the behavior in this .gif: the brighter the
          environment is, the more LEDs are on. When it's completely dark, the
          LED strip follows suit and has 0 LEDs on.
        </p>
        <GuideImage src="/images/guide/photoresistor-tryit.gif" size="LARGE" />
        <p>
          If you're stuck, copy and paste the code [below/from this link] into
          your Arduino IDE. Stuck? You can also download the code{' '}
          <a href="/arduino/PhotoResistor/PhotoResistor.ino">here</a>.
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
            the LED strip <span className={styles.pin}>DIn</span> to{' '}
            <span className={styles.pin}>PIN 4</span> on the Arduino).
          </li>
        </ul>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
