import { createGlobalState } from 'react-hooks-global-state'

type TInitState = {photoToScrollTo: null | number}
const initialState = { photoToScrollTo: null }
const { useGlobalState } = createGlobalState<TInitState>(initialState)

export const useLastViewedPhoto = () => {
  return useGlobalState('photoToScrollTo')
}