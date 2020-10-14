import React from 'react';

const listItem = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        id={props.index}
        name={props.index}
        onChange={(e) => props.toggleCheckbox(e, props.listItem)}
      />
      <label htmlFor={props.index} name={props.index}>
        {props.listItem.text}
      </label>
    </div>
  );
};

export default listItem;
