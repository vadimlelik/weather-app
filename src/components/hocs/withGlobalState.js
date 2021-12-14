import { useContext } from 'react'
import { globalContext } from '../../App'

export const withGlobalState = (Component) => (props) => {
  const { state } = useContext(globalContext)

  return <Component {...{ ...props, state }} />
}
