import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';

export class CollapsedComponent extends Component{
    state = {
        id: 1,
        companyName: null,
        position: null,
        dateRange: null,
    }
    render(){
        const data = this.state;
        return(
            <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <h4>Position {data.id}</h4>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6} offset ={2}>
                        <p>{data.companyName}, {data.position}, {data.dateRange}</p>
                    </Col>
                </Row>
                
            </Card>
        )
    }
}
export default CollapsedComponent;