import TaskList from 'component/task-list';
import * as React from 'react';
import AddTask from 'component/task-input';
import Layout from 'component/layout';
import {TimerProvider} from 'component/timer-provider';

// const ListItems = () => {
//   const {
//     state: timerItems, dispatch,
//   } = useTimerItems();
//
//   if (!timerItems) {
//     return null;
//   }
//
//   const deleteTask = (key) => {
//     dispatch(deleteTaskAction(key));
//   };
//
//   const stubEdit = (key) => {
//     dispatch(editTaskAction(key, 'Edited Text'));
//   };
//
//   return (
//     <ul>
//       {
//         Object.keys(timerItems).map((timerItemKey) => (
//           <li key={ timerItemKey }>
//             {JSON.stringify(timerItems[timerItemKey])}
//             <div>
//               <button
//                 type="button"
//                 onClick={ () => stubEdit(timerItemKey) }
//               >done
//               </button>
//               <button
//                 type="button"
//                 onClick={ () => deleteTask(timerItemKey) }
//               >delete
//               </button>
//             </div>
//           </li>
//         ))
//       }
//     </ul>
//   );
// };

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
        <TaskList />
      </Layout>
    </TimerProvider>
  );
}

export default App;
