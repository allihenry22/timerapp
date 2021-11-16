import * as React from 'react';
import AddTask from 'component/task-input';
import Layout from 'component/layout';
import TaskList from 'component/task-list';
import {TimerProvider} from 'component/timer-provider';

function App() {
  return (
    <TimerProvider>
      <Layout asideItems={ [
        'item 1',
        'item 2',
        'item 3',
      ] }
      >
        <AddTask />
        <TaskList />
      </Layout>
    </TimerProvider>
  );
}

export default App;
