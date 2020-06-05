import React, { useState, Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class RichEditorComponent extends Component {
  render(){
    return (
      <ReactQuill name = { this.props.name } theme="snow" onChange = {this.props.handleDescriptionChange}/>
    );
  }
}
export default RichEditorComponent;