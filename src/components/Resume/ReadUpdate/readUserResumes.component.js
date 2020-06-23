import React, {Component} from 'react';
import {Row, Col, Buton} from 'antd';
import resumeActions from '../../../actions/resume/resume.action';
import {connect} from 'react-redux';
import ReadUpdateResume from './readUpdateResume.component';

class ReadUserResumes extends Component{
    constructor(props){
        super(props);
        this.getResumesByUser();
    }

    getResumesByUser = () =>{
        const {dispatch} = this.props
        dispatch(resumeActions.readUserResumes())
    };

    render(){
    const resumes = this.props.state.userResumes;
    return(
        <>
            <div className ='read-resumes-template'>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg:32 }}>
                    {resumes &&
                            resumes.map(resume => (
                                <div style ={{marginRight:'10%'}}>
                                    <ReadUpdateResume resume = {resume} key ={resume.Id} id = {resume.id}/>
                                </div>
                                
                        ))
                    }
                </Row>
            </div>
        </>
    )
    }
    
}

const mapStateToProps = (state) => {
    return{
        state: state
    }
}
export default connect(mapStateToProps)(ReadUserResumes)