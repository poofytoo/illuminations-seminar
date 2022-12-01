import Link from 'next/link';
import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Slit Scan</h1>
        <h2>How to Create/Edit a Show</h2>
        <h3>Using Existing Templates</h3>
        <ol>
          <li>
            There are six template shows that can serve as a base to create new
            shows. Click into one and then click the <b>"SAVE AS NEW SHOW"</b>{' '}
            button at the top of the screen to create a new show entitles{' '}
            <i>Copy of [Template name]</i> where you can begin experimenting
            with the settings.
            <ol>
              <li>
                OpenWeather API - when you want to have an input of some data
                (e.g. weather information) and map that input to a slit-scan of
                an image; more info below.{' '}
                <GuideImage
                  src="/images/guide/openweather-api.png"
                  size="LARGE"
                />
              </li>
              <li>
                Perlin - when you want to randomize light/dark regions of the
                lights (either in black and white or with an added color) to
                create ~*an ambience*~.{' '}
                <GuideImage src="/images/guide/perlin-show.png" size="LARGE" />
              </li>
              <li>
                Rainbow - when you want to cycle through rainbow lights and
                adjust the speed.{' '}
                <GuideImage src="/images/guide/rainbow-show.png" size="LARGE" />
              </li>
              <li>
                Simple Colors - when you want to pick two (or more) colors to
                form a meaningful gradient that shifts slowly over time, like a
                lava lamp.{' '}
                <GuideImage
                  src="/images/guide/simple-colors-show.png"
                  size="LARGE"
                />
              </li>
              <li>
                Slit-Scan - when you want to pick an image and scan down its
                pixels row-by-row to create a curious and/or pleasing lighting
                experience; more info below.{' '}
                <GuideImage
                  src="/images/guide/slit-scan-show.png"
                  size="LARGE"
                />
              </li>
              <li>
                Solid Color - when you just want one straightforward, nice color
                for the lights because not everythin has to be flashing and
                changing.{' '}
                <GuideImage
                  src="/images/guide/solid-color-show.png"
                  size="LARGE"
                />
              </li>
            </ol>
          </li>
          <li>
            The CONTROLS section will give you some user-friendly interfaces to
            adjust variables within the code, like the color (inputted as
            RGB/HEX) or speed (via a slider bar) or the lights. You can change
            these and click the <b>"DELETE SHOW"</b> button if you want to start
            fresh, or click the <b>"SAVE"</b> button if you're done working.
          </li>
          <li>
            The CODE section will give you more granular control over how the
            lights are functioning, such as if you want to adjust the speed
            beyond what a control module allows you to, connect a different API
            for data, or otherwise do cool/weird/fun things with the lights and
            light outputs.
            <ol>
              <li>
                The code is written in p5.js, and there is a separate MIT
                Illuminations Style Guide about working in this language.
              </li>
              <li>
                The text beneath the title of each control panel tells you the
                relevant code value (e.g. control.color1.value or
                controls.scanSpeed.value).
              </li>
              <li>
                Click <b>"RUN"</b> to check your code animation, and the{' '}
                <b>"CONSOLE"</b> or <b>"HELP"</b> buttons if you need some
                assistance debugging.
              </li>
            </ol>
          </li>
          <li>
            Feel free to mess around with the show as much as you want when it
            has <b>"Draft"</b> or <b>"Copy of"</b> in the title, which indicates
            that it is not for public consumption. The MIT Admissions Office
            will set criteria to name shows and introduce them into the regular
            Welcome Center rotation, such as:
            <ol>
              <li>MORE</li>
              <li>COMING</li>
              <li>SOON!!</li>
            </ol>
          </li>
        </ol>

        <h3>(OpenWeather) API Best Practices</h3>
        <ul>
          <li>
            General API
            <ul>
              <li>
                Pick data that can be sorted into 4-5 buckets that create
                different light displays, like the "types of weather".
              </li>
              <li>
                Pick data that can be mapped more dynamically to the lights,
                like a change in color when the ISS flies overhead.
              </li>
              <li>
                Have a pleasing backup in case the API crashes so that we don't
                accidentally default to a strobing mess.
              </li>
            </ul>
          </li>
          <li>
            Narrative complexity - how do you make weather interesting when you
            put it up on the lights, what kind of transformations can you
            create? How do we not make it overwhelingly grey inside the Welcome
            Center on cloudy days?
            <ul>
              <li>
                Instead of solid color for "clear sky" assign colors to
                different temperatures/weather patterns throughout a single day
                like those weather crocheted blankets.
                <ul>
                  <li>
                    Maybe we could tak e the doodle aesthetic and make the rain
                    animation colorful and bright instead of grey, e.g. Lydia
                    doodles a rainy day and we can sample from that image rather
                    than just solid grey.
                  </li>
                  <li>
                    Maybe do something focused on sustainability data, climate
                    resiliency, etc.
                  </li>
                </ul>
              </li>
              <li>
                Constellations - see stars (or visualize them in some way)
                because we typically can't see them from MIT campus.
                <ul>
                  <li>
                    <Link href="https://api.nasa.gov/">
                      https://api.nasa.gov/
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Mapping brightness to time of day
                <ul>
                  <li>Sun that moves from East to West.</li>
                  <li>
                    Maybe some display particularly at sunset or sunrise to
                    complement the sky.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h3>Slit-Scan Best Practices</h3>
      </div>
    </div>
  );
};

export default Page;
