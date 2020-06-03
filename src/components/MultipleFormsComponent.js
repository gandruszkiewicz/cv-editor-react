import React, { Component } from 'react';
import { PlusCircleOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col } from 'antd';
import CollapsedComponent from './CollapsedComponent';

export class MultipleFormsComponent extends Component {
    constructor(props){
        super(props);
        
        this.addChildComponent = 
            this.addChildComponent.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
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
                {id: id+1, collapse: false}
            ]
        });
    }

    handleCollapse(e){
        var component = this.state.components.find(x => x.id == e.currentTarget.id);
        component.collapse = !component.collapse;
        this.setState({
            ...this.state,
            component
        })
    }

    render(){
        return(
            <>
                {
                    this.state.components.map((item) => (
                        <div className = 'multiple-form-layout'>
                            <div className = 'margin-all'>
                                {item.collapse && 
                                    <div>
                                        <Col className="gutter-row" span={1} offset ={22}>
                                            <Button type='text' 
                                                    className='arrow-button' 
                                                    onClick={this.handleCollapse}
                                                    id = {item.id}>
                                                <DownOutlined />
                                            </Button>
                                        </Col>
                                        <this.props.component  key={item.id}/>
                                    </div>                              
                                }
                                {!item.collapse &&
                                    <div>
                                        <Col className="gutter-row" span={1} offset ={22}>
                                            <Button type='text' 
                                                    className='arrow-button' 
                                                    onClick={this.handleCollapse}
                                                    id = {item.id}>
                                                <UpOutlined/>
                                            </Button>
                                        </Col>
                                        <CollapsedComponent/>
                                    </div>
                                }
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