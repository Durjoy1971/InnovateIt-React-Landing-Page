import React from "react";

const WorkFlowMap = (props) => {
  return (
    <div className="flex gap-5">
      <div className="text-green-600 mt-1">{props.icon}</div>
      <div>
        <h1 className="text-xl">{props.text}</h1>
        <p className="text-gray-500 text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default WorkFlowMap;
