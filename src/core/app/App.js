import * as React from 'react';
import AddTask from 'component/task-input';
import Layout from 'component/layout';
import {
  TIMER_ACTION_TYPES, TimerProvider, useTimerItems, STATUS_ENUM,
} from 'component/timer-provider';

const ListItems = () => {
  const {
    state: timerItems, dispatch,
  } = useTimerItems();

  if (!timerItems) {
    return null;
  }

  const deleteTask = (key) => {
    dispatch({
      type: TIMER_ACTION_TYPES.DELETE,
      payload: {key},
    });
  };

  const stubEdit = (key) => {
    dispatch({
      type: TIMER_ACTION_TYPES.EDIT,
      payload: {
        key,
        timerItem: {status: STATUS_ENUM.DONE},
      },
    });
  };

  return (
    <ul>
      {
        Object.keys(timerItems).map((timerItemKey) => (
          <li key={ timerItemKey }>
            {JSON.stringify(timerItems[timerItemKey])}
            <div>
              <button
                type="button"
                onClick={ () => stubEdit(timerItemKey) }
              >done
              </button>
              <button
                type="button"
                onClick={ () => deleteTask(timerItemKey) }
              >delete
              </button>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

function App() {
  return (
    <TimerProvider>
      <Layout asideItems={ [
        'item 1',
        'item 2',
        'item 3',
      ] }
      >
        <AddTask
          onSubmitCallback={ () => {} }
          className="my-class"
        />
        <ListItems />
      </Layout>
    </TimerProvider>
  );
}

export default App;
