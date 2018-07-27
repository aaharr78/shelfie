import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: []
    }
  }
updateInventory = inventory => {
  this.setState({inventory})
}

// componentDidMount(){
//   axios.get('/api/inventory').then(results => {
//     this.setState({inventory: results.data})
//   })
// }
deleteInventory = (id) => {
  axios.delete(`/api/inventory/${id}`).then(results => {
      this.props.updateInventory(results.data)
  })
}

  render() {

    // let inventoryMap = this.state.inventory.map(s => {
    //   return <Inventory updateInventory={this.updateInventory} s={s}/>
    // })

    return (
      <div className="App">
        Header
        Form
        Dashboard
        <p>image Url:</p>
        <input/>
        <p>Product Name:</p>
        <input/>
        <p>Price:</p>
          <input/>     
        <button onClick={this.deleteItem}>Cancel</button>
        <button onClick={this.addItem}>Save Changes</button>
      </div>
    );
  }
}

export default App;
