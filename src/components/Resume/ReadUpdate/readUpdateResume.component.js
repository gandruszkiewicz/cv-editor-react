import React, { Component } from 'react';
import { EditOutlined} from '@ant-design/icons';
import cvicon from '../../../assets/cv_icon.svg'
import CvIconComponent from '../../cvIcon.component';
import { Card, Input } from 'antd';


export class ReadUpdateResume extends Component {
  render(){
    return (
        <Card
            hoverable
            style = {Object.assign({width: '100%'},{height: '100%'}, {marginTop: '5%'})}
            cover = {<CvIconComponent/>}
            actions={[
              <EditOutlined key="edit" />,
            ]}
          >
          <Input defaultValue = "lorem" style = {Object.assign({border:'none'})}/>
            
        </Card>
    );
  }
}
export default ReadUpdateResume;