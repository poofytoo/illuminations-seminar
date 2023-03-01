import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';
import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Using Slit-Scan to Make Light Shows</h1>
        <div className={styles.learningGoals}>
          <h3>Goals of this Chapter</h3>
          <ul>
            <li>Obtain a basic understanding of slit-scan photography</li>
            <li>Learn some best practices for using the Slit-Scan template</li>
          </ul>
        </div>
        <h2>What is the Slit-Scan Template?</h2>
        <p>
          One of the original templates in the MIT Illuminations App is called
          "Slit-Scan," which might not be as intuitive as other names like
          "Simple Gradient" or "Solid Color."
        </p>

        <p>
          The Slit-Scan template has you upload an image (such as a photo) as an
          input, scans down the image's pixels row-by-row, and sends those
          colors to display on the lights. Depending on what source image you
          choose, this can create a really cool or really jarring effect!
        </p>

        <p>
          If you're curious, the name of this template comes from slit-scan
          photography, otherwise known as photo finish photography, streak
          photography, or the "Time Warp Scan" filter on TikTok. It's often used
          to visualize the tiny details of high-speed events, or to create weird
          artistic effects by combining different moments of time into one
          static image.
        </p>

        <p>
          In film photography, the slit-scan technique was accomplished by
          physically cutting narrow strips (called slits) out of back-to-back
          images and stacking them together. But now we can do this digitally by
          extracting rows of pixels from a video &mdash; which is, if you think
          about it, just a bunch of back-to-back images.
        </p>
        <h2>What photos make a good slit-scan show?</h2>
        <p>
          While building MIT Illuminations, we've developed some best practices
          that make the Slit-Scan template output more pleasing light colors and
          transitions. That being said, because art made with blinky lights is
          just as subjective as any other kind of art, these aren't unbreakable
          rules!
        </p>

        <p>
          If you need help getting started with the Slit-Scan template, we have
          a{' '}
          <a href="https://learn.illuminations.mit.edu/chapter/intro-to-app">
            whole chapter about creating shows in the MIT Illuminations App
          </a>
          . One of the best ways to learn &mdash; and develop your own personal
          best practices &mdash; is to play around, uploading different images
          and changing some values to see what you like.
        </p>

        <h3>Resolution</h3>
        <p>
          Because there are 120 lights in the MIT Illuminations installation in
          the Welcome Center, any image that you upload into the Slit-Scan
          template needs to be at least 120 pixels wide. You can modify the code
          of the template to the length of your LED strip if you want, which
          would adjust the minimum number of pixels.
        </p>

        <p>
          Either way, an image that's 120 pixels wide is a relatively low
          resolution for most photos. Unless you're creating a pixel art
          masterpiece, we recommend using photos with screen or web resolution
          (72dpi) so that the thumbnail image of the show is clear.
        </p>

        <h3>Resolution</h3>

        <p>
          In general, you want to pick a source image that has a handful of{' '}
          <strong>bold colors</strong>. Even though RGB LEDs can produce
          millions of colors, not all of them look equally nice as part of a
          light show.
        </p>

        <ul>
          <li>
            Images with subtle gradients of darker colors, such as dark browns
            or blues, don't tend to translate well to a light show. Your eyes
            may not be able to detect changes in the LEDs, or they may look like
            they're flickering and broken.
          </li>
          <li>
            Some images have an object on a solid black, white, or grey
            background. Large vertical swaths of these neutral colors may also
            make LEDs look broken. In this case, we recommend cropping the image
            more closely to the object.
          </li>
          <li>
            For images with a rainbow of vibrant colors, you'll want to pay
            extra attention to the <code>SCAN&nbsp;SPEED</code> setting. A
            Rainbow template exists, and it's easy to accidentally create a more
            chaotic or less intentional-looking version of that show with a busy
            Slit-Scan photo.
          </li>
        </ul>

        <p>
          Some colors look harmonious together, while others clash. And
          different colors of light can also make people feel different things.
          The science and art of mixing colors falls under a study called{' '}
          <strong>color theory</strong>.
        </p>

        <p>
          There are lots of online tools (for example,{' '}
          <a href="https://color.adobe.com/create/color-wheel">
            this one from Adobe
          </a>
          ) to help you understand which color combinations work well together.
          And reading guides about theater or concert lighting (for example,{' '}
          <a href="https://pro.harman.com/insights/av/color-theory-for-concert-lighting-design/">
            this one from Harman
          </a>{' '}
          or{' '}
          <a href="https://scholarworks.umt.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=3180&context=etd">
            this M.A. thesis
          </a>
          ) can give you a better sense of how different colored lights can set
          a mood or a scene.
        </p>

        <p>
          <strong>Shapes</strong>
        </p>

        <p>
          Remember that the Slit-Scan template scans down the image's pixels
          row-by-row. So an image with vertical stripes of color (such as an
          image of gel electrophoresis) can end up looking quite static on the
          lights. An image with horizontal stripes of color (such as the pride
          flag) can lead to sudden or jarring transitions between colors. An
          image of a circular object on a background (such as an artist's
          conception of a planet) will have a "ballooning" effect where a color
          appears on the center lights, spreads outward, and then contracts from
          whence it came.
        </p>

        <p>
          Selecting images with color gradients rather than hard edges and
          vertical color variations will generally lead to more interesting
          shows.
        </p>

        <p>
          <strong>Photographic Style</strong>
        </p>

        <p>
          Professional-looking portraits of objects don't always translate well
          to an LED light show. Portraits of animals, people, or buildings have
          generally looked odd in our tests, especially when there's a limited
          amount of sharpness with a blurred background (like you see in
          Portrait mode photos taken by iPhones). Without getting into too much
          detail, photographers call this region of sharpness the{' '}
          <strong>depth of field</strong>, and it can also be added digitally as{' '}
          <strong>Gaussian blur</strong>.
        </p>

        <p>
          We recommend that your chosen image has a consistent amount of
          sharpness, whether it's a photograph or abstract art. But, that being
          said, feel free to play and develop your own sense of taste. Maybe
          you'll find the translation of blurred image colors to LEDs twinkly
          and pleasing instead of strobe-like and abrupt!
        </p>

        <p>
          <strong>Looping the Scan</strong>
        </p>

        <p>
          When the Slit-Scan template gets to the last row of pixels in an
          image, it jumps back to the top row. This can lead to a really sudden
          and obvious transition at this point in your light show.
        </p>

        <p>
          You could modify the <code>CODE</code> of the template to make it scan
          up-and-down instead of on a loop. But if you want to avoid doing that
          and have a seamless light show, you can just make sure that the image
          you upload contains a horizontal line of symmetry. There are plenty of
          free photo editors out there that can help you achieve this "movie
          magic," such as <a href="https://pixlr.com/">Pixlr</a> or{' '}
          <a href="https://www.gimp.org/">GIMP</a>.
        </p>

        <p>
          The modified image (left) will give you a smooth light show, while the
          original (right) will have a visible "seam" as the slit-scan
          transitions from the last row of pixels to the first again. Image
          credit: Harold "Doc" Edgerton/MIT
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
