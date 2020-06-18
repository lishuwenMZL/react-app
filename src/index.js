import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SideBar from './view/sideBar'
import CarouselImg from './view/carousel'

// 左侧导航栏
let element = <div className="box">
  <SideBar></SideBar>
  <CarouselImg></CarouselImg>
</div>

ReactDOM.render(element, document.getElementById('app'));
