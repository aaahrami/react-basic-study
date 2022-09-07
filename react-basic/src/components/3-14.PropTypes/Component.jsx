import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: "Rami",
  age: 312,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: function (props, propName, componentName) {
    if (!/32/.test(props[propName])) {
      return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Validation failed.");
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
