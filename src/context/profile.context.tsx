"use client";

import { DEFAULT_IMG_URL } from "@/helpers/constants";
import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  url: string;
};

type ActionType = {
  type: string;
  payload: string;
};

const initialState: StateType = {
  url: DEFAULT_IMG_URL,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_IMG_URL":
      return { ...state, url: action.payload };

    default:
      return state;
  }
};

export const ProfileContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ProfileContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
