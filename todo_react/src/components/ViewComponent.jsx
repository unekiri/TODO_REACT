import React from 'react';

export const ViewComponent = (props) => {
  return (
    <>
      <p className="title">{props.title}</p>
      <div className="headline">
        <span className="contents">{props.content}</span>
        <span className="plan">{props.plan}</span>
      </div>
    </>
  )
}