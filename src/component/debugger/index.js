import * as React from 'react';
import styles from './style/debugger.module.css';

const Debugger = ( props ) => (
  <pre className={ styles[ 'debugger' ] }>
    <code className={ styles[ 'debugger__code' ] }>
      { JSON.stringify( props, null, 4 ) }
    </code>
  </pre>
);

export default Debugger;
