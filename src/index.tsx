import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Upload from './Upload';

ReactDOM.render(
  <Upload
    text="点击上传"
    multiple
    // disabled
    // style={{
    //   color: 'red'
    // }}
    onChange={files => {
      console.log(files.item(0))
    }}
  />,
  document.getElementById('root')
)