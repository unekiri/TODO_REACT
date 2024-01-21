import React from 'react';

export const BackStyle = {
  minWidth: "480px",
  minHeight: "200px",
  padding: "10px",
  margin: "10px",
  borderRadius: "8px",
};

export const TitleStyle = {
  margin: "8px 0",
  color: "#333",
  fontWeight: "bold",
};

export const ViewComponent = ({ bkcolor, title, content, plan, children }) => {
  const individualBackStyle = {
    ...BackStyle, //オブジェクトの展開
    backgroundColor: bkcolor, //プロパティの追加
  };

  return (
    <div className="area" style={individualBackStyle}>
      <p className="title" style={TitleStyle}>{title}</p>
      <div className="headline">
        <span className="contents">{content}</span>
        <span className="plan">{plan}</span>
      </div>
      {children}
    </div>
  );
};