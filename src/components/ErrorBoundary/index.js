import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo)
    this.setState({ error })
  }
  render() {
    console.log(this.props.children)
    if (this.state.error) {
      return <div> companent crashed</div>
    }
    return this.props.children
  }
}
