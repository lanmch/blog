import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import CatalogueList from '../../components/catalogue-list';
import Followme from '../../components/followme';
import './index.less';
function Catalogue() {
  return (
    <div className="catalogue">
      <Header />
      <Banner />
      <CatalogueList />
      <Followme />
    </div>
  );
  
}

export default Catalogue;
