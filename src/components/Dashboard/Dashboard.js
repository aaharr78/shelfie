import React, {Component} from 'react'


export default class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onRef(this)
    } 
    render(){
        
        
        return(
            <div>
                {this.props.inventory.map()}
                Dashboard
            </div>
        )
    }
}