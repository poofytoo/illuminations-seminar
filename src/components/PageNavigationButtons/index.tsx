import { useEffect, useState } from 'react';
import { navigationLinks } from '../Sidebar';
import styles from './PageNavigationButtons.module.scss';

const PageNavigationButtons = () => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activePage = window.location.pathname;
      setActivePage(activePage);
    }
  }, []);

  let nextPage;
  let previousPage;
  const pageId = navigationLinks
    .map((link, key) => link.href)
    .indexOf(activePage.split('/chapter')[1]);
  let searchId = pageId;
  if (pageId !== -1) {
    while (!nextPage?.href && searchId < navigationLinks.length) {
      nextPage = navigationLinks[searchId + 1];
      searchId += 1;
    }
    searchId = pageId;
    while (!previousPage?.href && searchId > 0) {
      previousPage = navigationLinks[searchId - 1];
      searchId -= 1;
    }
  }

  return (
    <div className={styles.navigation}>
      {searchId > 0 && previousPage ? (
        <a href={`/chapter/${previousPage.href}`} className={styles.previous}>
          {previousPage.title}
        </a>
      ) : (
        <div />
      )}
      {nextPage ? (
        <a href={`/chapter/${nextPage.href}`} className={styles.next}>
          {nextPage.title}
        </a>
      ) : (
        <div />
      )}
    </div>
  );
};

export default PageNavigationButtons;
