'use client'

import { createContext, useReducer, Dispatch } from 'react';
import type { ImageProps } from '@/lib/types'

type StateType = {
    images: ImageProps[] | undefined
}

type ActionType = {
    type: string,
    payload?: ImageProps[]
}

const initialState: StateType = {
    images: [],
 };

 const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return { images: action.payload };
      default:
        return state;
    }
  };

  export const CounterContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
  }>({ state: initialState, dispatch: () => null });

 export const CounterContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    );
  };

  
  