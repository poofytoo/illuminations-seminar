import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-twilight.min.css';

import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';
import PageNavigationButtons from '../../components/PageNavigationButtons';

const arduinoCode = `#include <FastLED.h>

// How many leds in your strip?
#define NUM_LEDS 24 

// For led chips like Neopixels, which have a data line, ground, and power, you just
// need to define DATA_PIN.  For led chipsets that are SPI based (four wires - data, clock,
// ground, and power), like the LPD8806, define both DATA_PIN and CLOCK_PIN
#define DATA_PIN 6
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
              Understand the idea behind individually addressable LED strips
            </li>
            <li>Light up the WS2812b LED strips using the Arduino</li>
          </ul>
        </div>
        <h2>Overview</h2>
        <p>
          In the previous chapter, we learned how to control a single LED. Let's
          scale this up now and see if we're able to control a whole lot of LEDs
          using our Arduino and a special strip of LEDs (WS2812b) - the next
          step in trying to produce Illuminations at home!
        </p>
        <p>
          These LEDs are very popular among the maker community, and because of
          their versatility and ease-of-use, a lot of similar flavors can be
          found in art/lighting-related installations.
        </p>
        <GuideImage src="/images/guide/ws2812b.png" />
        <p>
          Before we dive into the WS2812b LED strips, it's important to
          understand that there are a variety of different kinds of LED strips.
          The three primary properties that make this one stand out over others
          are: <strong>RGB</strong>, <strong>5v</strong>, and{' '}
          <strong>individually addressable.</strong> We'll break each property
          down.
        </p>
        <h3>RGB LEDs</h3>
        <p>
          These are RGB LEDs, meaning each LED is actually a combination of
          three tiny LEDs - one that is red, one that is green, and one that is
          blue (hence the RGB). These are great because, compared to a single
          white LED, different values of each color can be turned on (i.e. red
          at full bright, green at half bright, and blue off) in order to
          produce millions of different colors.
        </p>
        <p>
          It's also important to understand that there are RGBW LEDs, which
          include a <strong>white</strong> channel. This white channel is
          sometimes used to just give a bit more pure of a white color, or to
          give it a bit more brightness.
        </p>
        <h3>5V LEDs</h3>
        <p>
          We're choosing something that is 5V because 5V is a number that works
          well with the Arduino. By default, the output of an Arduino on the
          digital pins is 5V, which means we can directly plug the data line of
          our LED strip (to be explained later) into the digital pin out in
          order to control them.
        </p>
        <p>
          There are other types of LEDs which take in other voltages - the most
          common being 12V. While the 12V tends to be more durable and brighter,
          they require additional components to be able to work with our
          Arduinos.
        </p>
        <h3>Individually Addressable</h3>
        <p>
          This LED strip is special because you only need three connections to
          be able to produce millions of different colors. The pins are: Power
          (5v), Data In (DI) and Ground (0V). With these three pins connected to
          the Arduino, you're able to set the brightness and color on each LED
          in the strand independent to each other! This is because the Arduino
          sends more than just an 'on' or an 'off' to the LED strip - rather,
          the Arduino communicates with a protocol (WS2812b) to a chip inside
          each LED, which in turn communicates to the next chip down in the line
          and so on and so on.{' '}
        </p>
        <h2>The Datasheet</h2>
        <p>
          Most electrical components come with an important document of
          information that describes it's properties, operating characteristics,
          and other important detail. This is usually called a data sheet! The
          WS2812b's{' '}
          <a
            href="https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf"
            target="_blank"
          >
            data sheet
          </a>{' '}
          probably contains more information than you need right now for this
          guide, but it's good to always have it around so you can reference it
          if you need to.
        </p>
        <h2>Connecting the WS2812b LED Strip</h2>
        <p>Time to connect it to your Arduino!</p>
        <GuideImage
          size="LARGE"
          src="/images/guide/ws2812b-wiring-diagram.png"
        />
        <p>
          Take a look at the diagram and take a look at the copper pads of the
          LED strip. There should be 3 connections you have to make. Once you've
          identified them, wire them up to the corresponding pins on the
          Arduino. A quick and easy way to do this is to put jumper wires
          directly into the female connectors (these connectors are called '3pin
          JST-SM' connectors), and the other end can go directly into the
          Arduino.
        </p>
        <p>
          Other wiring diagrams online for similar LEDs might have you put a
          resistor in between Pin 6 of the Arduino and the Din of the LED strip.
          This is meant to help mitigate noise and bad signals - usually not
          necessary for shorter strands.
        </p>
        <p>
          The <strong>direction does matter</strong> on these LED strips. Your
          strips may come with an arrow which indicate direction of data flow.
          More importantly, you should make sure you distinguish (on your strip)
          between Data In (Di or Din) and Data Out (Do or Dout)
        </p>
        <p>
          You'll also notice that on the LED strip, there are these copper pads
          after every LED. This is such that you can cut it to a desired length!
          Of course, if you wanted to extend it, you can also solder multiple
          strands together. There is a limit to how many LEDs you can power and
          control at once though - so just keep an eye out if things start
          misbehaving.
        </p>
        <h2>Upload a Program!</h2>
        <p>
          To communicate with these LED lights, we're going to use a library
          called{' '}
          <a href="https://fastled.io/" target="_blank">
            FastLED
          </a>
          . Libraries (like this one) take a lot of the hassle out of writing
          code for a specific component from scratch. Better yet, they usually
          come with a lot of examples that you can use as a starting point for
          your own projects.
        </p>
        <p>
          One way to add a library is to install one using Arduino's built in{' '}
          <strong>Library Manager</strong>. Open Arduino IDE and then go to{' '}
          <code>Sketch &gt; Include Library &gt; Manage Libraries</code>. Search
          for <strong>FastLED</strong> and then click <strong>Install</strong>.
        </p>
        <p>
          Next, let's open up an example sketch and try making our lights change
          colors. Go to <code>File &gt; Examples &gt; FastLED &gt; Cylon</code>
        </p>
        <p>
          When you open up the code, take a quick read through it. You'll notice
          there are 2 variables that are relevant to us. <code>NUM_LEDS</code>{' '}
          is the number of LEDs in your strip - you may have more than what
          we're able to power. Set that to a low number like 24. The second
          variable is <code>DATA_PIN</code>, which is set to 2. Change that to 6
          (since you're using pin 6 on the Arduino).
        </p>
        <p>
          You can leave <code>CLOCK_PIN</code> untouched since we're not using
          that anyway. The code you end up with should look something like this:
        </p>
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
          Play around with different examples and take a look at the code.
          There's a great tutorial on Instructables which explains the world of
          the FastLED library, which you can{' '}
          <a
            href="https://www.instructables.com/Basic-of-FastLED/"
            target="_blank"
          >
            find here
          </a>
          .
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
