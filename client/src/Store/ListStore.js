import React, { createContext, useReducer } from "react";

const initialState = {
  senators: [],
  representatives: [],
  selectedState: 'UT',
  catagory: 'senator'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SENATORS": {
      return {
        ...state,
        senators: action.value,
      };
    }

    case "UPDATE_SEARCH_STATE": {
      return {
        ...state,
        userSearch: action.value,
      };
    }

    case "FILTER_USERS": {
      let filteredUsers = state.usersData;

      //Checking for both names and tags then returning new filtered array
      if (state.filterType === "All") {
        filteredUsers = state.usersData.filter((user) => {
          let tags = "";
          if (user.tags) {
            tags = user.tags.toString();
          }
          return (
            user.name.first
              .toLowerCase()
              .includes(state.userSearch.toLowerCase()) ||
            user.name.last
              .toLowerCase()
              .includes(state.userSearch.toLowerCase()) ||
            tags.toLowerCase().includes(state.userSearch.toLowerCase())
          );
        });
      }
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