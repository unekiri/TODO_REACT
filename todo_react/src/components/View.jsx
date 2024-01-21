import React from 'react';
import { BackStyle } from './BackStyle';

export const View = ({ bkcolor, title, content, plan, children }) => {
  const individualBackStyle = {
    ...BackStyle, //オブジェクトの展開
    backgroundColor: bkcolor, //プロパティの追加
  };

  return (
    <div className="area" style={individualBackStyle}>
      <p className="title">{title}</p>
      <div className="headline">
        <span className="contents">{content}</span>
        <span className="plan">{plan}</span>
      </div>
      {children}
    </div>
  );
};