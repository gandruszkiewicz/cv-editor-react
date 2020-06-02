import React, { Component } from 'react';
import ExperienceComponent from './Resume/ExperienceComponent';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export class MultipleFormsComponent extends Component {
    constructor(props){
        super(props);
        
        this.addChildExperienceComponent = 
            this.addChildExperienceComponent.bind(this);
    }
    state = {
        experiences : [
            {id: 1}
        ]
    }

    addChildExperienceComponent(e){
        var id = this.state.experiences[this.state.experiences.length-1].id
        this.setState({
            experiences: [
                ...this.state.experiences,
                {id: id+1}
            ]
        }
        );
    }
    render(){
        return(
            <>
                {
                    this.state.experiences.map((item) => (
                        <ExperienceComponent key={item.id}/>
                    ))
                }
                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={this.addChildExperienceComponent}
                    >
                    Add position
                </Button>
            </>
        )
    }
}

export default MultipleFormsComponent;