import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';
import moment from 'moment';

export class CollapsedComponent extends Component{
    state = this.props.experience
    render(){
        const data = this.state;
        return(
            <>
            {data &&
                <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <h4>Position {this.props.id}</h4>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6} offset ={2}>
                        <p>
                            {data.CompanyName}, 
                            {data.Position}, 
                            {moment(data.DateFrom).format('YYYY/MM')} - {moment(data.DateTo).format('YYYY/MM')}
                        </p>
                    </Col>
                </Row>
                
            </Card>
            }
            {!data &&
                <Card>
                    <p>No content</p>
                </Card>
            }
            </>
        )
    }
}


export default CollapsedComponent;