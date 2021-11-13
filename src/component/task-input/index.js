import {
  useTimerItems, createTaskAction,
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
    dispatch(createTaskAction(value));
    onSubmitCallback(value);
    taskInput.current.value = '';
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
        <button type="submit"> Create an New Task</button>
      </form>
    </div>
  );
};

export default AddTask;
