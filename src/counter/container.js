import React from 'react';
import Presentational from './presentational';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            count :0
        }
    }
    handleIncrement =()=> {
        this.setState({count:this.state.count+1});
    }
    handleDecrement=()=> {
        if(this.state.count==0) this.setState({count:0});
        else this.setState({count:this.state.count-1});
    }
    reset=()=> {
        this.setState({count:0});
    }
    render() {
        return  <Presentational 
                    count={this.state.count}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    reset={this.reset}
                />
    }
}

export default Container;