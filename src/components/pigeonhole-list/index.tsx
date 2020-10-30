import React, { useEffect, useState } from 'react';
import PigeonholeItem from '../../components/pigeonhole-item';
import './index.less';
function PigeonholeList() {
  return (
    <div className="pigeonhole-item">
      <PigeonholeItem />
      <PigeonholeItem />
      <PigeonholeItem />
      <PigeonholeItem />
    </div>
  );

}

export default PigeonholeList;
