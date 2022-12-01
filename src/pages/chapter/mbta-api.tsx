import { useState } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-twilight.min.css';

import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';
import PageNavigationButtons from '../../components/PageNavigationButtons';

const Page = ({ data }: any) => {
  const [code, setCode] = useState(`// MIT Illuminations Seminar 2022
// MBTA API Example

// These are the dimensions of the Illuminations canvas
const w = 1200;
const h = 100;

// URL which fetches the predictions of the kendall station
const url = "https://api-v3.mbta.com/predictions?filter%5Bstop%5D=place-knncl&api_key=05327b8cd8b546dc945b5b79ed66a173";

let prevMs = 0;
let backgroundColor = 0;
let posX = 0;
let posX2 = 0;

function setup() {
  // The Illuminations canvas is 1200px by 100px.
  // Based on how many lights, we sample this number.
  createCanvas(w, h);
}

function draw() {
  // Get the current number of milliseconds since the app started
  let ms = millis();
  
  // To prevent constantly hitting the API on every 'draw', we only run the following
  // once every 500ms (0.5 seconds)
  if (prevMs + 500 < ms) {
    prevMs = ms;
    
    // httpGet is a p5js function which fetches the data from a URL and loads it in the
    // response variable. This syntax is called an arrow function.
    // The full reference: https://p5js.org/reference/#/p5/httpGet
    httpGet(url, 'json', false, (response) => {
      
      // We do some math to figure out where to position it
      let timeAwayMs = new Date(response.data[0].attributes.arrival_time) - new Date();
      posX = Math.min(((300000 - timeAwayMs)/300000) * 1000, 1000);
      
      let timeAwayMs2 = new Date(response.data[1].attributes.arrival_time) - new Date();
      posX2 = Math.min(((300000 - timeAwayMs2)/300000) * 1000, 1000);
    });
  }

  // background
  background(backgroundColor);

  strokeWeight(7);

  // yellow square which represents our station
  fill(255,200,0);
  stroke(255, 200, 0);
  rect(1000,0,100,100);

  // red square
  fill(255,0,0);
  stroke(120,0,0);
  rect(Math.floor(posX),0,100,100);

  // red square 2
  fill(255,0,0);
  stroke(120,0,0);
  rect(Math.floor(posX2),0,100,100);
}
`);

  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>MBTA API</h1>
        <h2>Working with APIs</h2>
        <p>
          Below is example of how to use the MBTA API. We recommend using the{' '}
          <a href="https:/p5js.org">p5.js online editor</a> to play around with
          this, and then copy and paste it into the{' '}
          <a
            href="https://github.com/sosolimited/MIT-Illuminations/releases"
            target="_blank"
          >
            Illuminations app
          </a>{' '}
          when you're happy with it.
        </p>
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js, 'javascript')}
          padding={20}
          style={{
            overflow: 'visible',
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
