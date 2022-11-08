import styles from './GuideImage.module.scss';
import cx from 'classnames';

type ImageSize = 'SMALL' | 'MEDIUM' | 'LARGE' | 'FULL';

const GuideImage = ({
  src,
  size,
  alt,
  caption,
}: {
  src: string;
  size?: ImageSize;
  alt?: string;
  caption?: string;
}) => {
  return (
    <div className={styles.imageContainer}>
      <a href={src} target="_blank">
        <img
          className={cx({
            [styles.small]: size === 'SMALL',
            [styles.medium]: size === 'MEDIUM',
            [styles.large]: size === 'LARGE',
            [styles.full]: size === 'FULL',
          })}
          src={src}
          alt={alt}
        />
        {caption && <span className={styles.caption}>{caption}</span>}
      </a>
    </div>
  );
};

export default GuideImage;
