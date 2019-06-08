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
                    this.state.basketItems.splice(index, 1)
                    this.setState({
                      basketItems: this.state.basketItems
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
                  onAddingItem={(phoneId) => {
                    this.state.basketItems.push(phoneId);
                    this.setState({
                      basketItems: this.state.basketItems
                    })
                  }}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    })
                  }}
                  onAddingItem={(phoneId) => {
                    this.state.basketItems.push(phoneId);
                    this.setState({
                      basketItems: this.state.basketItems
                    })
                  }}
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
