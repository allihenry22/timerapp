import Debugger from 'component/debugger';
import {
  deleteTaskAction,
  STATUS_ENUM,
  updateTimerStatus,
  // STATUS_ENUM,
  // updateTimerStatus,
  useTimerItems,
} from 'component/timer-provider';
import * as React from 'react';
import {Timer} from 'utils';
import './style/timer-item.css';

const {
  useRef, useState,
} = React;

function TaskItem(props) {
  const {
    text, status, timer, id,
  } = props;

  const {dispatch} = useTimerItems();
  const [
    timeRemainingState,
    setTimeRemainingState,
  ] = useState('Not Started');
  const taskTimer = useRef(new Timer({
    lengthInMs: 10000,
    onStop: () => {
      dispatch(updateTimerStatus(id, STATUS_ENUM.DONE));
    },
    onTick: ({
      timeRemaining,
      msRemaining,
    }) => {
      setTimeRemainingState(msRemaining < 0 ? '00:00:00' : timeRemaining);
    },
  }));

  const handleDelete = () => {
    dispatch(deleteTaskAction(id));
  };

  const handleTimerStart = () => {
    if (!taskTimer.current) {
      console.warn('no task timer');
      return;
    }
    taskTimer.current.starTimer();
    dispatch(updateTimerStatus(id, STATUS_ENUM.STARTED));
  };

  function timerClassName() {
    console.log(status);
    if (status === STATUS_ENUM.STARTED) {
      return 'timer timer--started';
    }
    if (status === STATUS_ENUM.DONE) {
      return 'timer timer--done';
    }

    return 'timer';
  }

  return (
    <li className={ timerClassName() }>
      <div>
        <strong>{text}</strong> Timer: <em>{timeRemainingState}</em>
        <Debugger { ...{
          text,
          status,
          timer,
        } }
        />
      </div>
      <div style={ {padding: '20px'} }>
        <button
          style={ {marginRight: '10px'} }
          type="button"
          onClick={ handleDelete }
        >Delete Task
        </button>
        <button
          type="button"
          onClick={ () => (handleTimerStart()) }
        >Start Task
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
