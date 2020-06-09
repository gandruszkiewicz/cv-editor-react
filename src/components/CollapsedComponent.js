import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';
import moment from 'moment';

export class CollapsedComponent extends Component{
    state = this.props.data
    render(){
        const data = this.state;
        var instituteName = null
        var positionName = null;

        switch(this.props.fluxStoreName){
            case("experience"):
                instituteName = "CompanyName";
                positionName = "Position";
                break;
            case("qualification"):
                instituteName = "SchoolName";
                positionName = "FieldOfStudy";
                break;
        }

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
                            {data[instituteName]}, 
                            {data[positionName]}, 
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