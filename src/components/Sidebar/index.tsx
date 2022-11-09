import Link from 'next/link';
import styles from './Sidebar.module.scss';

export const navigationLinks = [
  {
    id: 8,
    title: 'Analog In',
    href: '/8-analog-in',
  },
  {
    id: 9,
    title: 'Potentiometers',
    href: '/9-potentiometer',
  },
  {
    id: 10,
    title: 'MBTA API',
    href: '/10-mbta-api',
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {navigationLinks.map((link, key) => (
          <Link key={key} href={link.href}>
            <li>
              <span className={styles.chapterId}>{link.id}</span>
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
