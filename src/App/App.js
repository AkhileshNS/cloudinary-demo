import React from 'react';
import { Global } from '@emotion/core';

import { globalStyles } from 'global/styles';

function Video(path) {
  return (
    <video style={{ width: '100%' }} controls>
      <source
        src={`https://res.cloudinary.com/futuristinvent/video/upload/vc_h265,w_1280,c_limit/Test%20Videos/${path}.mp4`}
        type='video/mp4; codecs=hvc1'
      />
      <source
        src={`https://res.cloudinary.com/futuristinvent/video/upload/vc_vp9,w_1280,c_limit/Test%20Videos/${path}.webm`}
        type='video/webm; codecs=vp9'
      />
      <source
        src={`https://res.cloudinary.com/futuristinvent/video/upload/vc_auto,w_1280,c_limit/Test%20Videos/${path}.mp4`}
        type='video/mp4'
      />
    </video>
  );
}

function App() {
  return (
    <div className='App'>
      <Global styles={globalStyles} />
      {Video("surfing")}
    </div>
  );
}

export default App;
