import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import PigeonholeList from '../../components/pigeonhole-list';
import './index.less';
function Pigeonhole() {
  const [ifAtTop, setAtTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
    }, false)
  }, [])
  return (
    <div className="pigeonhole">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title="归档"
        abstract=""
      />
      <PigeonholeList />
    </div>
  );

}

export default Pigeonhole;
