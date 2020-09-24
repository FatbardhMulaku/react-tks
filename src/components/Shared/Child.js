import React from "react";

const Child = (props) => {
  const updateChildrenWithProps = React.Children.map(
    props.children,
    (child, i) => {
      return React.cloneElement(child, child.props.handleClose);
    }
  );

  return <div>{updateChildrenWithProps}</div>;
};

export default Child;
