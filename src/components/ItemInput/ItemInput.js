import React from 'react';

const itemInput = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.inputChanged}
        value={props.itemInput}
      />
      <button onClick={props.addItem}>Add Item</button>
    </div>
  );
};

export default itemInput;
