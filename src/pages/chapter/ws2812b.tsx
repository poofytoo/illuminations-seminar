import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-twilight.min.css';

import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Link from 'next/link';

const arduinoCode = `#include <FastLED.h>

// How many leds in your strip?
#define NUM_LEDS 24 

// For led chips like Neopixels, which have a data line, ground, and power, you just
// need to define DATA_PIN.  For led chipsets that are SPI based (four wires - data, clock,
// ground, and power), like the LPD8806, define both DATA_PIN and CLOCK_PIN
#define DATA_PIN 4
#define CLOCK_PIN 13

// Define the array of leds
CRGB leds[NUM_LEDS];

void setup() { 
  Serial.begin(57600);
  Serial.println("resetting");
  FastLED.addLeds<WS2812,DATA_PIN,RGB>(leds,NUM_LEDS);
  FastLED.setBrightness(84);
}

void fadeall() { for(int i = 0; i < NUM_LEDS; i++) { leds[i].nscale8(250); } }

void loop() { 
  static uint8_t hue = 0;
  Serial.print("x");
  // First slide the led in one direction
  for(int i = 0; i < NUM_LEDS; i++) {
    // Set the i'th led to red 
    leds[i] = CHSV(hue++, 255, 255);
    // Show the leds
    FastLED.show(); 
    // now that we've shown the leds, reset the i'th led to black
    // leds[i] = CRGB::Black;
    fadeall();
    // Wait a little bit before we loop around and do it again
    delay(10);
  }
  Serial.print("x");

  // Now go in the other direction.  
  for(int i = (NUM_LEDS)-1; i >= 0; i--) {
    // Set the i'th led to red 
    leds[i] = CHSV(hue++, 255, 255);
    // Show the leds
    FastLED.show();
    // now that we've shown the leds, reset the i'th led to black
    // leds[i] = CRGB::Black;
    fadeall();
    // Wait a little bit before we loop around and do it again
    delay(10);
  }
}
`;

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
              Obtain a basic understanding of individually addressable LED
              strips
            </li>
            <li>Use the Arduino to light up the WS2812b LED strip</li>
          </ul>
        </div>
        <h2>What are WS2812b LED strips?</h2>
        <p>
          In order to make MIT Illuminations-style lights at home, we need to
          scale up from programmatically controlling one LED to a lot at once!{' '}
          <strong>WS2812b LED strips</strong> are very popular among the maker
          community because of their versatility and ease-of-use.
        </p>
        <p>
          These LEDs are very popular among the maker community, and because of
          their versatility and ease-of-use, a lot of similar flavors can be
          found in art/lighting-related installations.
        </p>
        <GuideImage
          src="/images/guide/ws2812b.png"
          caption="One 10 feet (3 meters) long WS2812b LED strip, coiled up"
        />
        <p>
          There are three primary properties that make the LEDs in WS2812b
          strips stand out over other options: RGB, 5V, and individually
          addressable.
        </p>
        <h3>RGB LEDs</h3>
        <p>
          WS2812b strips contain <strong>RGB LEDs</strong>, meaning each LED is
          actually a combination of three even tinier LEDs - one that is Red,
          one that is Green, and one that is Blue (hence the RGB). These are
          great because each color can be turned on to a different brightness
          level (i.e. red at full bright, green at half bright, and blue off) in
          order to produce millions of different colors.
        </p>
        <p>
          There are lots of other kinds of LEDs, like <strong>RGBW LEDs</strong>
          , which include a white channel. This white channel can help the LED
          emit a more pure white color, or give the LED a bit more brightness in
          general.
        </p>
        <h3>5V LEDs</h3>
        <p>
          The 5V LEDs in the WS2812b strips work well with the Arduino Uno we're
          using for our projects. By default, the output of an Arduino's digital
          pins is 5V, which means we can directly plug in the data line of our
          LED strip (to be explained later).
        </p>
        <p>
          The most common type of LED takes 12V power, but there are plenty of
          others too. While the 12V tends to be more durable and brighter, they
          require additional components to be able to work with our Arduinos.
        </p>
        <h3>Individually Addressable</h3>
        <p>
          The WS2812b strip has three connections, also known as pins: Power
          <span className={styles.pin}>5V</span>, Data In{' '}
          <span className={styles.pin}>Din</span>, and Ground{' '}
          <span className={styles.pin}>0V</span>. With these three pins
          connected to an Arduino, you're able to set the brightness and color
          on each individual LED in the strand! This is why we say it's
          “individually addressable” - you can control each LED independently.
        </p>
        <p>
          This is because the Arduino sends more than just an 'on' or an 'off'
          signal to the LED strip. Instead, the Arduino uses a protocol
          (WS2812b) to communicate to a chip inside the first LED, which in turn
          communicates to the next LED down in the line, and so on.
        </p>
        <h2>The WS2812b Data Sheet</h2>
        <p>
          Most electrical components come with an important document that
          describes their properties, operating characteristics, and other
          important details. This is usually called a{' '}
          <strong>data sheet</strong>! The WS2812b's{' '}
          <a
            href="https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf"
            target="_blank"
          >
            data sheet
          </a>{' '}
          probably contains more information than you need right now, but it's
          good to have it around for reference.
        </p>
        <h2>Connecting the WS2812b LED Strip</h2>
        <p>
          Now that we know what we're working with, it's time to connect the LED
          strip to your Arduino! Take a look at this diagram to see how we're
          going to connect everything:
        </p>
        <GuideImage
          size="LARGE"
          src="/images/guide/ws2812b-wiring-diagram.png"
          caption="Wiring diagram for the WS2812b LED strip"
        />
        <p>
          We'll have to make 3 connections between the Arduino Uno pins and the
          copper pads at the end of the LED strip. A quick and easy way to do
          this is to put one end of a wire directly into the '3pin JST-SM'
          connectors on the copper pads, and the other end directly into the
          Arduino pin. Like we mentioned in{' '}
          <Link href="/chapter/blink">
            Chapter 4 when we wired up a breadboard
          </Link>
          , it's good practice to use red wire for the 5V power supply and black
          wire for the 0V ground (labeled{' '}
          <span className={styles.pin}>GND</span>) - if those colors are
          available.
        </p>

        <GuideImage
          size="LARGE"
          src="/images/guide/ws2812b-arduino.png"
          caption="A photo of what your end result might look like, after you've made the 3 connections"
        />
        <p>
          You'll also notice that there are these copper pads after every LED on
          the strip, so you can cut it to whatever length you want! You could
          also extend it by soldering multiple strands together, but there is a
          limit to how many LEDs you can power and control at once - so just
          keep an eye out if things start misbehaving.
        </p>
        <p>
          Other wiring diagrams online for similar LEDs might have you put a
          resistor in between <span className={styles.pin}>PIN 4</span> of the
          Arduino and the <span className={styles.pin}>Din</span> of the LED
          strip, instead of a direct wire like we show here. This added resistor
          is meant to help mitigate noise and bad signals, but it's usually not
          necessary for shorter strands like the one we recommend for this
          project. You may need one if you choose to extend your strip though!
        </p>
        <p>
          Lastly, just like how the polarity of a single LED matters, the
          polarity/direction does matter on these LED strips too. The WS2812b
          LED strip only has a Data In (<span className={styles.pin}>Din</span>)
          pin to keep things simple, but other strips may come with an arrow
          that indicates the direction of data flow. If that's the case, you
          should make sure you distinguish between Data In (
          <span className={styles.pin}>Di</span> or{' '}
          <span className={styles.pin}>Din</span>) and Data Out (
          <span className={styles.pin}>Do</span> or{' '}
          <span className={styles.pin}>Dout</span>) on your strip.
        </p>
        <h2>Upload a Program!</h2>
        <p>
          To communicate with our newly wired LED lights, we're going to use a
          library called{' '}
          <a href="https://fastled.io/" target="_blank">
            FastLED
          </a>
          . Libraries (like this one) take a lot of the hassle out of writing
          code for a specific component from scratch. Better yet, they usually
          come with a lot of examples that you can use as a starting point for
          your own projects.
        </p>
        <p>
          One way to add a library is to install it using Arduino's built-in{' '}
          <strong>Library Manager</strong>. Open Arduino IDE and then go to{' '}
          <code>Sketch &gt; Include Library &gt; Manage Libraries</code>. Search
          for <strong>FastLED</strong> and then click <strong>Install</strong>.
        </p>
        <p>
          Next, let's open up an example sketch (which is what Arduino calls
          code files) and try making our lights change colors. Go to{' '}
          <code>File &gt; Examples &gt; FastLED &gt; Cylon</code>
        </p>
        <p>
          When you open up the code, take a quick read through it. You'll notice
          there are 2 variables that are relevant to us:
        </p>
        <ul>
          <li>
            <code>NUM_LEDS</code> is the number of LEDs in your strip - you may
            have more than what we're able to power with our 5V Arduino output.
            Set that to a low number like 24.
          </li>
          <li>
            <code>DATA_PIN</code> is whatever pin you've connected the Din of
            the LED strip to on the Arduino. It's initially set to 2, but you'll
            want to change it to 4 (since we're using pin 4 on the Arduino).
          </li>
          <li>
            Note that you can leave <code>CLOCK_PIN</code> untouched, since
            we're not using it.{' '}
          </li>
        </ul>
        <p>The code you end up with should look something like this:</p>
        <Editor
          value={arduinoCode}
          onValueChange={() => {}}
          highlight={(code) => highlight(code, languages.js, 'javascript')}
          padding={20}
          style={{
            overflow: 'visible',
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
        <p>
          When you hit <strong>upload</strong> (you may have to make sure the
          port and settings are correct!) your LED strips should start to light
          up in a cool pattern! Give yourself a pat on the back if you made it
          this far. You deserve it!
        </p>
        <p>
          After you have your LEDs working, you can play around with different
          parameters and take a closer look at the code. There's a great
          tutorial on Instructables which explains the world of the FastLED
          library, which you can{' '}
          <a
            href="https://www.instructables.com/Basic-of-FastLED/"
            target="_blank"
          >
            find here
          </a>
          .
        </p>
        <h2>Troubleshooting</h2>
        <p>
          If something doesn't work like how it's supposed to, start by seeing
          if there are any errors in the Arduino IDE console output. Make sure
          you have the board and the port selected correctly - if you don't
          remember how to do this, check out{' '}
          <a
            href="https://support.arduino.cc/hc/en-us/articles/4733418441116-Upload-a-sketch-in-Arduino-IDE"
            target="_blank"
          >
            Arduino's Guide
          </a>
          .
        </p>
        <p>
          If everything is uploading correctly, but you're not seeing the LED
          lights change colors, double check and make sure your wiring is
          correct. Make sure the code is copy pasted correctly from above, and
          that the variables are set correctly.
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
