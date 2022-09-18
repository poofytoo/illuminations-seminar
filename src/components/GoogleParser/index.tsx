import Link from 'next/link';
import React from 'react';

import cx from 'classnames';
import styles from './GoogleParser.module.scss';
import Image from 'next/image';

const LineBreakManager = ({ element }: any) => {
  // given a text string, replace all the /n with <br /> and return a jsx element
  if (element === undefined) {
    return <></>;
  }

  const textArray = element.split('\v');
  return textArray.map((text: string, key: number) => {
    if (key !== textArray.length - 1)
      return (
        <React.Fragment key={key}>
          {text}
          <br />
        </React.Fragment>
      );
    return <>{text}</>;
  });
};

const TextRunParser = ({ data }: any) => {
  if (!data) return null;
  const { red, green, blue } =
    data?.textStyle?.foregroundColor?.color?.rgbColor || {};
  const textStyle = data?.textStyle?.link?.url
    ? {}
    : {
        color: `rgba(${[
          Math.floor((red ? red : 0) * 255),
          Math.floor((green ? green : 0) * 255),
          Math.floor((blue ? blue : 0) * 255),
          1,
        ].join(',')})`,
      };

  // textStyle normally would go in style. but ignored here
  return (
    <span
      className={cx({
        [styles.bold]: data.textStyle.bold,
        [styles.underline]: data.textStyle.underline,
        [styles.italic]: data.textStyle.italic,
      })}
      style={{}}
    >
      <LineBreakManager element={data.content} />
    </span>
  );
};

const ParagraphParser = ({
  data,
  inlineObjects,
}: {
  data: any;
  inlineObjects?: any;
}) => {
  return data
    .map((item: any) => item.textRun || item?.inlineObjectElement)
    .map((item: any, key: any) => {
      if (item?.inlineObjectId) {
        const embeddedObject =
          inlineObjects[item.inlineObjectId].inlineObjectProperties
            .embeddedObject;
        return (
          <div className={styles.embeddedImage} key={key}>
            <Link href={embeddedObject.imageProperties.contentUri}>
              <Image
                className={styles.embeddedImageSrc}
                alt={'Refresh to see image'}
                src={embeddedObject.imageProperties.contentUri}
                height={embeddedObject.size.height.magnitude}
                width={embeddedObject.size.width.magnitude}
              />
            </Link>
          </div>
        );
      }

      if (item?.textStyle.link) {
        return (
          <a href={item.textStyle.link?.url} key={key}>
            <TextRunParser data={item} />
          </a>
        );
      }

      return (
        <span key={key}>
          <TextRunParser data={item} />
        </span>
      );
    });
};

let bulletSection = 'NO_BULLET';
let bulletSections: any = [];
const GoogleParser = ({ rawData }: any) => {
  const data = rawData?.body?.content;
  const inlineObjects = rawData?.inlineObjects;

  const cleanedData = data
    ?.filter((section: any) => section.paragraph)
    .map((section: any) => section.paragraph);
  const elementList = [];

  for (let i = 0; i < cleanedData?.length; i++) {
    const paragraph = cleanedData[i];
    const paragraphStyle = paragraph.paragraphStyle.namedStyleType;

    if (paragraphStyle.includes('HEADING')) {
      const headingLevel = paragraphStyle.split('_')[1];
      elementList.push(
        React.createElement(
          `h${headingLevel}`,
          null,
          <ParagraphParser
            inlineObjects={inlineObjects}
            data={paragraph.elements}
          />
        )
      );
    } else if (paragraph.bullet) {
      if (bulletSection === 'NO_BULLET') {
        bulletSections = [];
        bulletSection = 'MID_BULLET';
      }
      bulletSections.push(
        React.createElement(
          `li`,
          null,
          <ParagraphParser
            inlineObjects={inlineObjects}
            data={paragraph.elements}
          />
        )
      );
    } else if (bulletSection === 'MID_BULLET') {
      bulletSection = 'NO_BULLET';
      elementList.push(React.createElement(`ul`, null, bulletSections));
      elementList.push(
        React.createElement(
          `div`,
          { className: styles.paragraph },
          <ParagraphParser
            inlineObjects={inlineObjects}
            data={paragraph.elements}
          />
        )
      );
    } else {
      elementList.push(
        React.createElement(
          `div`,
          { className: styles.paragraph },
          <ParagraphParser
            inlineObjects={inlineObjects}
            data={paragraph.elements}
          />
        )
      );
    }
  }

  return <div className={styles.googleParser}>{elementList}</div>;
};

export default GoogleParser;
