import React, { useEffect, useState } from 'react';
import PigeonholeItem from '../../components/pigeonhole-item';
import './index.less';
// const useFetch = (url: string): any => {
  
//   const [data, setData] = useState({})
//   useEffect((): any => (
//     async () => {
//       const resp = await fetch(url)
//       const json = await resp.json()
//       setData(json)
//     }), [])
//   return data
// }
const useFetch = (url: string): any => {
  
  const [data, setData] = useState({})
  useEffect(() => {
      const resp = fetch(url).then(async(res) => {
        const json = await res.json();
        setData(json);

      })
    }, [])
    return data
}

function PigeonholeList() {
  const { pigeonholeList } = useFetch("http://119.29.174.131:7001/getArticlePigeonhole");
  let yearArr = pigeonholeList ? Object.keys(pigeonholeList).reverse(): [];
  return (
    <div className="pigeonhole-item">
      {
        yearArr ? yearArr.map((item: string, index: number) => {
          return <PigeonholeItem key={index} everyYearList={ pigeonholeList[item] } year={ item } />
        }) : null
      }
    </div>
  );

}

export default PigeonholeList;
