import {
  useTimerItems, TIMER_ACTION_TYPES,
} from 'component/timer-provider';
import * as React from 'react';

const {useRef} = React;

const AddTask = (props) => {
  const {
    className, onSubmitCallback,
  } = props;

  const {dispatch} = useTimerItems();

  const taskInput = useRef(null);

  function handleOnSubmit(ev) {
    ev.preventDefault();
    const {value} = taskInput.current;
    dispatch({
      type: TIMER_ACTION_TYPES.ADD,
      payload: {text: value},
    });
    onSubmitCallback(value);
  }

  function generateTask() {
    dispatch({
      type: TIMER_ACTION_TYPES.ADD,
      payload: {text: `task ${Math.floor(Math.random() * 10)}`},
    });
  }

  return (
    <div>
      <form
        className={ className }
        onSubmit={ handleOnSubmit }
      >
        <input
          type="text"
          ref={ taskInput }
        />
        <button type="submit"> Add Something Here</button>
      </form>
      <button
        type="button"
        onClick={ generateTask }
      > Generate A Task
      </button>
    </div>
  );
};

export default AddTask;
