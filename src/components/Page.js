import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Page = (Component) => {
  return (props) => {
    const path = props.match.path
    const transitionName = props.location.state
      ? props.location.state.transition
      : ''
    return (
      <>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={800}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={transitionName}
        >
          <Component {...props} />
        </ReactCSSTransitionGroup>
      </>
    )
  }
}

export default Page
