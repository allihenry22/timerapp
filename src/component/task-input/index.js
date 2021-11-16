import * as React from 'react';
import {
  useTimerItems, createTaskAction,
} from 'component/timer-provider';
import './style/task-input.css';

const {useRef} = React;

const AddTask = (props) => {
  const {className} = props;

  const {dispatch} = useTimerItems();

  const taskInput = useRef(null);

  function handleOnSubmit(ev) {
    const {value} = taskInput.current;

    ev.preventDefault();

    dispatch(createTaskAction(value));

    taskInput.current.value = '';
  }

  return (
    <div className="task-input">
      <form
        className={ className }
        onSubmit={ handleOnSubmit }
      >
        <input
          className="task-input__entry-field"
          type="text"
          ref={ taskInput }
        />
        <button type="submit"> Create a New Task</button>
      </form>
    </div>
  );
};

export default AddTask;
