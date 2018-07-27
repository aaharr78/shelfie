import React, { Component } from 'react';
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            image_url: '',
            name: '',
            price: 0
            
        }
        this.addItem = this.addItem.bind(this)
    }

    handleImageurl = (e) => {
        this.setState({image_url: e.target.value})
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }

    addItem() {

        let obj = {
            item: this.state.inventory
        }
        axios.post('/api/inventory', obj).then(response => {
            this.setState({
                name: response.data,
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

                <button onClick={this.deleteItem}>edit</button>
                <button onClick={this.addItem}>Delete</button>
            </div>
        )
    }
}