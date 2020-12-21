import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import EssaysList from '../../components/essays-list';
import Followme from '../../components/followme';
import Footer from '../../components/footer';
import './index.less';
function Essays() {
  const [ifAtTop, setAtTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
    }, false)
  }, [])
  return (
    <div className="essays">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title="杂文"
        abstract="生活思考与经验复盘"
      />
      <EssaysList />
      <Followme />
      <Footer />
    </div>
  );

}

export default Essays;
