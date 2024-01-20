import React from 'react';

export const ViewComponent = (props) => {
  const ContentStyle = {
    backgroundColor: props.bkcolor,
    minWidth: "480px",
    minHeight: "200px",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
  };

  const TitleStyle = {
    margin: "8px 0",
    color: "#333",
    fontWeight: "bold",
  }

  return (
    <>
      <div class="area" style={ContentStyle}>
        <p className="title" style={TitleStyle}>{props.title}</p>
        <div className="headline">
          <span className="contents">{props.content}</span>
          <span className="plan">{props.plan}</span>
        </div>
        {props.children}
      </div>
    </>
  )
}