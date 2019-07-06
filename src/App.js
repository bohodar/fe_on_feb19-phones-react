import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './Basket'
import Filter from './Filter'
import Catalog from './Catalog'
import Viewer from './Viewer'

import './App.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
    };
  }
  onAddingItem = (phoneId) => {
    this.setState((prev) => {
      return {
        basketItems: [...prev.basketItems, phoneId]
      }
    })
  };

  render() {

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
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

              />
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    })
                  }}
                  onAddingItem={this.onAddingItem}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId)
                    })
                  }}
                  // onPhoneSelected={async(phoneId) => {
                  //   const url = `api/phones/${phoneId}.json`;
                  //   const getPhone = await fetch(url)
                  //       .then(result => result);
                  //   this.setState({
                  //     selectedPhone: getPhone,
                  //   })
                  // }}
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
