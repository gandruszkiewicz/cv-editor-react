import React, { Component } from 'react';
import { PlusCircleOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col } from 'antd';
import CollapsedComponent from './collapsed.component';
import { connect } from 'react-redux';
import { SkillFormComponent } from './skillForm.component';

export class MultipleFormsComponent extends Component {
    constructor(props){
        super(props);
        
        this.addChildComponent = 
            this.addChildComponent.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = this.initState();
    }
    
    fluxStoreName = null;
    isChildSkillFormComponent = 
        this.props.component.WrappedComponent === SkillFormComponent;

    initState(){
        this.fluxStoreName = this.props.fluxStoreName;
        var id = 0;
        var initState = {
            components: []
        };
        var isCollapsed = !this.isChildSkillFormComponent;
        this.props.state[this.fluxStoreName].map(item => {
            initState.components.push(
                {id: id, collapse: isCollapsed, data: item}
            )
            id += 1;
        })
        
        return initState;
    }

    addChildComponent(e){
        var id = this.state.components.length
        this.setState({
            components: [
                ...this.state.components,
                {id: id, collapse: false}
            ]
        });
    }

    handleCollapse(e){
        var component = this.state.components
            .find(x => x.id === Number(e.currentTarget.id));

        component.collapse = !component.collapse;
        this.setState({
            ...this.state,
            component
        })
    }

    componentWillUnmount(){
        this.fluxStoreName = null;
    }

    handleDelete(e){
        this.setState({
            components: this.state.components
                .filter(
                    x => x.id !== Number(e.currentTarget.id))
        })
    }


    render(){
        return(
            <>
                {
                    this.state.components.map((item) => (
                        <div className = 'multiple-form-layout'>
                            <div className = 'margin-all'>
                                {!item.collapse && 
                                    <div>
                                        {!this.isChildSkillFormComponent &&
                                            <Col className="gutter-row" span={1} offset ={22}>
                                                <Button type='text' 
                                                        className='arrow-button' 
                                                        onClick={this.handleCollapse}
                                                        id = {item.id}>
                                                    <DownOutlined />
                                                </Button>
                                            </Col>
                                        }
                                        <this.props.component  
                                            data = {item.data} 
                                            key={item.id} 
                                            id = {item.id}
                                            handleDelete = {this.handleDelete}/>
                                    </div>                              
                                }
                                {item.collapse &&
                                    <div>
                                        <Col className="gutter-row" span={1} offset ={22}>
                                            <Button type='text' 
                                                    className='arrow-button' 
                                                    onClick={this.handleCollapse}
                                                    id = {item.id}>
                                                <UpOutlined/>
                                            </Button>
                                        </Col>
                                        <CollapsedComponent 
                                            data = {item.data}
                                            fluxStoreName = {this.fluxStoreName}
                                            id = {item.id}/>
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

const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

export default connect(mapStateToProps)(MultipleFormsComponent);