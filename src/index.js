import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd'
import './index.css';

import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}

let element = (
  <Menu
    onClick={handleClick}
    style={{ width: 200 }}
    className="height-full-screent"
    mode="vertical"
    theme="dark">
    
    <SubMenu key="sub1"
      icon={<MailOutlined />}
      title="Navigation One">
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
      <Menu.Item key="4">Option 4</Menu.Item>
    </SubMenu>

    <SubMenu
      key="sub2"
      icon={<AppstoreOutlined />}
      title="Navigation Two">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
    </SubMenu>

    <SubMenu
      key="sub4"
      icon={<SettingOutlined />}
      title="Navigation Three">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>

  </Menu>
)

ReactDOM.render(element, document.getElementById('app'));
