import React, { createContext, useReducer } from "react";

const initialState = {
  senators: [],
  representatives: [],
  selectedState: 'UT',
  catagory: 'senators'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SENATORS": {
      return {
        ...state,
        senators: action.value,
      };
    }

    case "SET_REPRESENTATIVES": {
      return {
        ...state,
        representatives: action.value,
      };
    }

    case "SET_SELECTED_STATE": {
      return {
        ...state,
        selectedState: action.value,
      };
    }

    case "SET_CATAGORY": {
      return {
        ...state,
        catagory: action.value,
      };
    }

    default:
      return state;
  }
};

export const listContext = createContext(initialState);

export const ListStore = ({ children }) => {
  const [listState, updateList] = useReducer(reducer, initialState);

  return (
    <listContext.Provider value={{ listState, updateList }}>
      {children}
    </listContext.Provider>
  );
};