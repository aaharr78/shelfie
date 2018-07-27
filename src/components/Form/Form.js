import React, { Component } from 'react';
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            imageurl: '',
            productName: '',
            price: 0,
            product: []
        }
        this.addItem = this.addItem.bind(this)
    }
    handleUserInput = (e) => {
        this.setState({
            product: e.target.value
        })
    }
    addItem() {

        let obj = {
            item: this.state.product
        }
        axios.post('/api/inventory', obj).then(response => {
            this.setState({
                list: response.data,
                product: ''
            })
        })
    }
    componentDidMount() {
        axios.get('/api/inventory').then( response => {
            this.setState({
                list: response.data
            })
        })
    }
    deleteItem = (id) => {
        axios.delete(`/api/inventory/${id}`).then( response => {
            this.setState({
                list: response.data
            })
        })
    }



    render() {
        return (
            <div>
                <input />
                <input />
                <input />

                <button onClick={this.deleteItem}>Cancel</button>
                <button onClick={this.addItem}>Add to Inventory</button>
            </div>
        )
    }
}