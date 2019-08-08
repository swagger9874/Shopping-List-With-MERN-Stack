import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import ShoppingList from "./components/ShoppingList"
import { Provider } from "react-redux"
import { Container } from "reactstrap"
import ItemModel from "./components/ItemModel"
import store from "./store"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          <Container>
          <ItemModel />
          <ShoppingList />
          </Container>
        </div>
      </Provider>
    )
  }

}

export default App;
