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
                        <this.props.component  key={item.id}/>
                    ))
                }
                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={this.addChildComponent}
                    >
                    Add position
                </Button>
            </>
        )
    }
}

export default MultipleFormsComponent;