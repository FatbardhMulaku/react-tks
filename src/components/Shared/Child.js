import React from "react";

const Child = (props) => {
  const updateChildrenWithProps = React.Children.map(
    props.children,
    (child, i) => {
      return React.cloneElement(
        child,
        //this properties are available as a props in child components
        child.props.handleClose
      );
    }
  );

  return <div>{updateChildrenWithProps}</div>;
};

export default Child;
