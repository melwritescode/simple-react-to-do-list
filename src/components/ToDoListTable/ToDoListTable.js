import React, { Component, Fragment } from 'react';
import ItemInput from '../ItemInput/ItemInput';
import List from '../List/List';

class ToDoList extends Component {
  state = {
    newItemInput: '',
    todoItems: [],
  };

  handleItemInput = (e) => {
    this.setState({
      newItemInput: e.target.value,
    });
  };

  handleAddItem = () => {
    const newItemText = this.state.newItemInput;
    const updatedItemList = [...this.state.todoItems];
    const newItem = {
      text: newItemText,
      completed: false,
    };
    updatedItemList.push(newItem);
    this.setState({ todoItems: updatedItemList, newItemInput: '' });
  };

  handleToggleCheckbox = (e, listItem) => {
    const itemsCopy = [...this.state.todoItems];
    const checkedItemIndex = itemsCopy.findIndex((item) => {
      return item.text === listItem.text;
    });
    const checkedItem = { ...this.state.todoItems[checkedItemIndex] };
    checkedItem.completed = !checkedItem.completed;
    itemsCopy[checkedItemIndex] = checkedItem;
    this.setState({ todoItems: itemsCopy });
  };

  render() {
    return (
      <Fragment>
        <List
          list={this.state.todoItems}
          toggleCompletionCheckbox={this.handleToggleCheckbox}
        />
        <ItemInput
          inputChanged={this.handleItemInput}
          itemInput={this.state.newItemInput}
          addItem={this.handleAddItem}
        />
      </Fragment>
    );
  }
}

export default ToDoList;
