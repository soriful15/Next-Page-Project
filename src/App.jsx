import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      {/* <h1>this is app page</h1> */}
   <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;