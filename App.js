/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {View, Text}  from 'react-native';
import DemoImage from './src/Component/Demoimage';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoInput from './src/Component/DemoTextInput';
import DemoStyle from './src/Component/DemoStyle';
import BinddingData from './src/Component/BinddingData';
import BT01 from './src/Component/BT01';

const App = () => {
return (
  <Fragment>
  {/* <StateFull/>
  <StateLess/> */}
  {/* <DemoImage/>  */}
  {/* <DemoInput/> */}
  {/* <DemoStyle/>
  <BinddingData/> */}
   <BT01/>
</Fragment>
 
)



};

export default App;