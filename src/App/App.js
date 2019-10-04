import React from 'react';
import {Global} from '@emotion/core';

import {globalStyles} from 'global/styles';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <p>Hello World</p>
    </div>
  );
}

export default App;
