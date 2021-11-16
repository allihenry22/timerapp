import * as React from 'react';
import Debugger from 'component/debugger';
import styles from './style/layout.module.css';

const Layout = (props) => {
  const {
    asideItems,
    children,
  } = props;

  return (
    <main className={ styles['layout'] }>
      <div className={ styles['layout__header'] }>
        <h1 className={ styles['layout__heading'] }>Timer App</h1>
        create navigation component
      </div>
      <aside className={ styles['layout__side-bar'] }>
        <Debugger { ...asideItems } />
      </aside>
      <div className={ styles['layout__content'] }>
        { children }
      </div>
      <footer className={ styles['layout__footer'] }>
        create footer component
      </footer>
    </main>
  );
};

export default Layout;
