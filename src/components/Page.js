import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Page = (Component) => {
  return (props) => (
    <>
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={
          props.match.path === '/music' ? 'FromRight' : 'SlideOut'
        }
      >
        <Component {...props} />
      </ReactCSSTransitionGroup>
    </>
  )
}

export default Page
