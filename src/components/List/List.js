import React from 'react';
import ListItem from '../ListItem/ListItem';

const list = (props) => {
  return props.list.map((li, idx) => {
    return (
      <ListItem
        key={idx}
        index={idx}
        listItem={li}
        toggleCheckbox={props.toggleCompletionCheckbox}
      />
    );
  });
};

export default list;
