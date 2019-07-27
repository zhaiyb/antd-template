import React from 'react';
import PortalSite from './PortalSite';
import Wechat from './Wechat';
import InternetDoor from './InternetDoor';
import Outreach from './Outreach';
import InterfaceState from './InterfaceState';
import SystemState from './SystemState';

import './index.less';

const Demo = () => (
  <div className="main-container">
    <div className="main-left">
      <PortalSite />
      <Wechat />
      <InternetDoor />
    </div>
    <div className="main-center">
      中国地图 + 单位违规排行
    </div>
    <div className="main-right">
      <Outreach />
      <InterfaceState />
      <SystemState />
    </div>
  </div>
);
export default Demo;
