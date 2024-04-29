import React from "react";

const FeatureMap = (props) => {
  const { icon, text, description } = props;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 mb-10">
      <div className="flex items-start">
        <div className="mx-6 p-2 bg-neutral-900 text-orange-700 rounded-full">
          {icon}
        </div>
        <div>
          <h5 className="text-xl mb-3">{text}</h5>
          <p className="text-md p-2 text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureMap;
