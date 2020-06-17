import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';
import moment from 'moment';
import {connect} from 'react-redux';

export class CollapsedComponent extends Component{
    state = this.props.data
    render(){
        
        var instituteName = null
        var positionName = null;
        const data = !this.state && this.props.state ? 
            this.props.state[this.props.fluxStoreName][this.props.id] : this.state;

        switch(this.props.fluxStoreName){
            case("experience"):
                instituteName = "CompanyName";
                positionName = "Position";
                break;
            case("qualification"):
                instituteName = "SchoolName";
                positionName = "FieldOfStudy";
                break;
            default:
                break;
        }
        
        const positionNumber = this.props.id + 1;
        return(
            <>
            {data &&
                <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <h4>Position {positionNumber}</h4>
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

const mapStateToProps = (state) => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(CollapsedComponent);