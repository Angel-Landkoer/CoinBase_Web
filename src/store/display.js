import { createStore } from 'zustand/vanilla'

export const store = createStore(() => ({
  toggle: false,
}))

export const changeValue = () => store.setState((state) => ({ toggle: !state.toggle }))
