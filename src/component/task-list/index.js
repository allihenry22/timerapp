import TaskItem from 'component/task-list/task-item';
import {useTimerItems} from 'component/timer-provider';
import * as React from 'react';

function TaskList() {
  const {state: tasks = []} = useTimerItems();
  const taskKeys = Object.keys(tasks);

  return (
    <ul style={ {listStyle: 'none'} }>
      {
        taskKeys.map((key) => (
          <TaskItem
            key={ key }
            id={ key }
            { ...tasks[key] }
          />
        ))
      }
    </ul>
  );
}

export default TaskList;
