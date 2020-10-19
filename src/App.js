import React from 'react';

import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className="APP">
     {/* <Dinner></Dinner> */}
     <Dinner dishname="chicken biryani" sweetdish ="kheer" />
     <hr/>
     <Dinner dishname="chicken krahi" sweetdish ="jalybi" />
     <hr/>
     <Dinner dishname="mutton" sweetdish ="halwa" />
    </div>
  );
}

export default App;
