
import React,{Component} from 'react';
class Itemlist extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="col-lg-3 mb-2 text-center">
                <div className="bg-white p-3 rounded">
                    <h4> {this.props.itemname} </h4>
                    <hr/>
                    <img src={this.props.pic} height="100"/>
                    <hr/>
                    <p className="text-danger"> <b> {this.props.price} </b></p>
                </div>
            </div>
        )
    }
}

export default Itemlist;