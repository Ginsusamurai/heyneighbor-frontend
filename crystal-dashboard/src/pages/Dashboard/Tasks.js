import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from 'assets/images/checkbox-uncheck.svg';
import checkImage from 'assets/images/checkbox-check.svg';

class myInventory extends Component {
  state = {
    rent: [
      {
        id: 1,
        content: 'Sign contract for "What are conference organizers afraid of?"',
        completed: true
      },
      {
        id: 2,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: true
      },
      {
        id: 3,
        content: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit	',
        completed: true
      },
      {
        id: 4,
        content: 'Create 4 Invisible User Experiences you Never Knew About',
        completed: false
      },
      {
        id: 5,
        content: 'Read "Following makes Medium better"	',
        completed: false
      },
      {
        id: 6,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: false
      }
    ]
  };

  toggleComplete = rented => {
    this.setState({
      rent: this.state.rent.map(itemRented => {
        if (itemRented.id === rented) itemRented.completed = !itemRented.completed;
        return itemRented;
      })
    });
  }

  deleteitemRented = rented => {
    this.setState({
      rent: this.state.rent.filter(itemRented => itemRented.id !== rented)
    });
  }

  render() {
    return (
      <div className="card ">
        <div className="header">
          <h4 className="title">Rented Items</h4>
        </div>
        <div className="content">
          <form>
          {this.state.rent.map(itemRented => (
            <div className={cx("itemRented-item", {completed: itemRented.completed})} key={itemRented.id}>
              <div className="itemRented-item-wrapper">
              <label className={cx("checkbox", {
                  checked: itemRented.completed
                })}
                >
                  <span className="icons">
                    <img className="first-icon" src={uncheckImage} width={17} />
                    <img className="second-icon" src={checkImage} width={17} />
                  </span>
                  <input type="checkbox" data-toggle="checkbox" checked={itemRented.completed} onChange={() => this.toggleComplete(itemRented.id)} />
                </label>
                <div className="itemRented-content">{itemRented.content}</div>
                <a onClick={() => this.deleteitemRented(itemRented.id)}>
                  &times;
                </a>
              </div>
            </div>
          ))}
          </form>


        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-history"></i> Updated 3 minutes ago
              </div>
        </div>
      </div>
    );
  }
}

export default myInventory;