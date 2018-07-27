import React, {Component} from 'react';
import Product from '../product/product'

export default class Dashboard extends Component{
    constructor(props){
        super(props)
    } 
    render(){
        
        
        return(
            <div>
                {this.props.inventoryList.map()}
                Dashboard
            </div>
        )
    }
}