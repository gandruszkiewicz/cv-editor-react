import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichEditorComponent() {
  const [value, setValue] = useState('');
  return (
      <ReactQuill theme="snow" value={value} onChange={setValue}>
          <div style ={{'backgroundColor':'white'}}></div>
      </ReactQuill>
  );
}
export default RichEditorComponent;