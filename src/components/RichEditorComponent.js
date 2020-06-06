import React, { useState, Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class RichEditorComponent extends Component {
  render(){
    return (
      <ReactQuill 
        theme="snow"
        name = { this.props.name }
        value = {this.props.initialValue}
        onChange = {this.props.handleDescriptionChange}/>
    );
  }
}
export default RichEditorComponent;