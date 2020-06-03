import React, { Component } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export class MultipleFormsComponent extends Component {
    constructor(props){
        super(props);
        
        this.addChildComponent = 
            this.addChildComponent.bind(this);
    }
    
    state = {
        components : [
        ]
    }

    addChildComponent(e){
        var id = this.state.components.length
        this.setState({
            components: [
                ...this.state.components,
                {id: id+1}
            ]
        });
    }
    render(){
        return(
            <>
                {
                    this.state.components.map((item) => (
                        <div style = {{marginLeft: '2%',marginRight: '2%', border: '0.5px solid darkgrey', borderRadius:'10px'}}>
                            <div className = 'margin-all'>
                                <this.props.component  key={item.id}/>
                            </div>
                        </div>
                    ))
                }
                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={this.addChildComponent}
                    className = 'margin-vertical'
                    >
                    Add position
                </Button>
            </>
        )
    }
}

export default MultipleFormsComponent;