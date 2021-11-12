import * as React from 'react';
import createID from 'utils';
// import createID from 'utils';

const {
  createContext,
  useReducer,
  useContext,
} = React;

const STATUS_ENUM = {
  DONE: 'DONE',
  STARTED: 'STARTED',
  NOT_STARTED: 'NOT_STARTED',
};

// function addItem(text) {
//   const newItem = {[createID()]: {
//     text,
//     status: STATUS_ENUM.NOT_STARTED,
//     timer: null,
//   }};
//   const newState = {
//     ...timerItems,
//     ...newItem,
//   };
//
//   setTimerItems(newState);
// }

// function getItem( id ) {
//   return timerItems[ id ];
// }
//
// function editItem( id, updatedValues ) {
//   const itemToUpdate = timerItems[ id ];
//
//   if ( !itemToUpdate ) {
//     throw new Error( `No item at index ${id}` );
//   }
//
//   const updatedItem = [
//     ...itemToUpdate,
//     ...updatedValues,
//   ];
//
//   const newState = {
//     ...timerItems,
//     ...updatedItem,
//   };
//
//   setTimerItems( newState );
// }

// function deleteItem(id) {
//   const currentTimers = {...timerItems};
//
//   delete currentTimers[id];
//
//   setTimerItems(currentTimers);
// }
const initialState = {};
const TimerContext = createContext();

const TIMER_ACTION_TYPES = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  EDIT: 'EDIT',
};

function timerReducer(state = initialState, action) {
  const {
    type, payload,
  } = action;
  switch (type) {
  case TIMER_ACTION_TYPES.ADD: {
    const newItem = {[createID()]: {
      text: payload.text,
      status: STATUS_ENUM.NOT_STARTED,
      timer: null,
    }};

    return {
      ...state,
      ...newItem,
    };
  }

  case TIMER_ACTION_TYPES.EDIT: {
    const {
      key, timerItem,
    } = payload;

    if (!key || !state[key] || !timerItem) {
      return state;
    }

    const updatedItem = {
      ...state[key],
      ...timerItem,
    };

    return {
      ...state,
      [key]: updatedItem,
    };
  }

  case TIMER_ACTION_TYPES.DELETE: {
    const {key} = payload;
    if (!key) {
      return state;
    }

    const currentState = {...state};

    delete currentState[key];

    return {...currentState};
  }

  default: {
    throw new Error(`Unhandled action type: ${type}`);
  }
  }
}

function TimerProvider({children}) {
  const [
    state,
    dispatch,
  ] = useReducer(timerReducer);

  const value = {
    state,
    dispatch,
  };

  return (
    <TimerContext.Provider value={ value }>{children}</TimerContext.Provider>
  );
}

function useTimerItems() {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error('useTimer must be used with in the Timer Provider');
  }

  return context;
}

export {
  useTimerItems,
  TimerProvider,
  TIMER_ACTION_TYPES,
  STATUS_ENUM,
};
