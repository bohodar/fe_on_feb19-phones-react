import React from 'react';
import { getAll } from './api/phone'
import Basket from './Basket'
import Filter from './Filter'
import Catalog from './Catalog'
import Viewer from './Viewer'

import './App.css';

const axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
      isSortDirectAZ: null,
      currentX: 0
    };
  }
  onAddingItem = (phoneId) => {
    this.setState((prev) => {
      return {
        basketItems: [...prev.basketItems, phoneId]
      }
    })
  };

  handleSorting = () => {
    let callback;
    this.setState((prev) => {
      if (!prev.isSortDirectAZ) {
        callback = (a, b) => a.id.localeCompare(b.id)
      } else {
        callback = (a, b) => b.id.localeCompare(a.id)
      }
      const copyArr = prev.phones.sort(callback);
      return {
        isSortDirectAZ: !prev.isSortDirectAZ,
        phones: copyArr
      }
    });
  };

  setPhoneById = (phoneId) => {
    axios
      .get(
        `https://mate-academy.github.io/phone-catalogue-static/api/phones/` +
        phoneId +
        `.json`
      )
      .then(res => {
        this.setState({ selectedPhone: res.data });
      });
  };

  render() {

    return (
      <div className="App">
        <header className="header--wrapper">
          <h1 className="header">
            Phone Market
          </h1>
          <p className="header__contacts">
            <span>Contacts</span>
          </p>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter
                onSort={this.handleSorting}
                sortDirect={this.state.isSortDirectAZ}
              />
              {this.state.basketItems.length > 0 ?
              <Basket
                basketItems={this.state.basketItems}
                onRemovingItem={
                  (index) => {
                    this.setState((prev) => {
                      prev.basketItems.splice(index, 1);
                      return {
                        basketItems: [...prev.basketItems],
                      }
                    })
                  }
                }

              /> : null }
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                      currentX: 0
                    })
                  }}
                  currentX={this.state.currentX}
                  onAddingItem={this.onAddingItem}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setPhoneById(phoneId);
                  }}
                  onAddingItem={this.onAddingItem}
                  basketList={this.state.basketItems}
                />
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
