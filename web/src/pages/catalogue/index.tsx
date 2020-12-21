import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import CatalogueList from '../../components/catalogue-list';
// import Followme from '../../components/followme';
import Footer from '../../components/footer';
import './index.less';
function Catalogue() {
  const [ifAtTop, setAtTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 25 ? setAtTop(false) : setAtTop(true);
    }, false)
  }, [])
  return (
    <div className="catalogue">
      <Header ifAtTop={ ifAtTop } />
      <Banner
        title="目录"
        abstract="categroy"
      />
      <CatalogueList />
      {/* <Followme /> */}
      <Footer />
    </div>
  );

}

export default Catalogue;
