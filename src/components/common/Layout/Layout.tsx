import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { ReactNode } from 'react';
import styles from './layout.module.css';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
