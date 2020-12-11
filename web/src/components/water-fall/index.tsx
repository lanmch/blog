import React, { useEffect, useState } from 'react';
import './index.less';
import classnames from 'classnames';
const imgArr = [
  'https://cdn-icare.qingtime.cn/AEB82EAA.jpg',
  'https://cdn-icare.qingtime.cn/4E70E5FD.jpg',
  'https://cdn-icare.qingtime.cn/AAE09617.jpg',
  'https://cdn-icare.qingtime.cn/111D757D.jpg',
  'https://cdn-icare.qingtime.cn/975F1604.jpg',
  'https://cdn-icare.qingtime.cn/7D223412.jpg',
  'https://cdn-icare.qingtime.cn/A50DF805.jpg',
  'https://cdn-icare.qingtime.cn/90D11455.jpg',
  'https://cdn-icare.qingtime.cn/2A499A33.jpg',
  'https://cdn-icare.qingtime.cn/D62BB7C2.jpg',
  'https://cdn-icare.qingtime.cn/D82F962E.jpg',
  'https://cdn-icare.qingtime.cn/B489E25C.jpg',
  'https://cdn-icare.qingtime.cn/5A842A52.jpg','https://cdn-icare.qingtime.cn/975F1604.jpg',
  'https://cdn-icare.qingtime.cn/7D223412.jpg',
  'https://cdn-icare.qingtime.cn/A50DF805.jpg',
  'https://cdn-icare.qingtime.cn/90D11455.jpg',
  'https://cdn-icare.qingtime.cn/2A499A33.jpg',
  'https://cdn-icare.qingtime.cn/D62BB7C2.jpg',
  'https://cdn-icare.qingtime.cn/D82F962E.jpg',
  'https://cdn-icare.qingtime.cn/B489E25C.jpg',
  'https://cdn-icare.qingtime.cn/5A842A52.jpg','https://cdn-icare.qingtime.cn/975F1604.jpg',
  'https://cdn-icare.qingtime.cn/7D223412.jpg',
  'https://cdn-icare.qingtime.cn/A50DF805.jpg',
  'https://cdn-icare.qingtime.cn/90D11455.jpg',
  'https://cdn-icare.qingtime.cn/2A499A33.jpg',
  'https://cdn-icare.qingtime.cn/D62BB7C2.jpg',
  'https://cdn-icare.qingtime.cn/D82F962E.jpg',
  'https://cdn-icare.qingtime.cn/B489E25C.jpg',
  'https://cdn-icare.qingtime.cn/5A842A52.jpg',
]
const columnNum = 4
function WaterFall() {
  const [itemWidth, setItemWidth] = useState();
  const [wallHeight, setWallHeight] = useState(0);
  // useEffect(() => {
  //   setItemWidth(250);
  //   window.addEventListener("resize", () => {
  //     setItemWidth(250);
  //   }, true);
  // }, []);

  // 高度数组
  let heightArr: any[] = [];
  // 元素数组
  let items: any[] = [];
  let itemsImgProps: any[] = [];
  for (let i = 0; i < imgArr.length; i++) {
    let currentImgWidth = document.getElementById(`img${i}`)?.clientWidth,
    currentImgHeight = document.getElementById(`img${i}`)?.clientHeight;
    // currentImgWidth = currentImgWidth ? currentImgWidth : 250;
    currentImgWidth = 250;
    // 第一行
    if(i < columnNum) {
      heightArr.push(currentImgHeight);
      itemsImgProps.push({
        top: 0,
        width: currentImgWidth,
        left: currentImgWidth * i,
        height: currentImgHeight
      })
    } else {
      let minHeight = Math.min(...heightArr);
      let index = heightArr.indexOf(minHeight);
      itemsImgProps.push({
        top: minHeight,
        width: currentImgWidth,
        left: index * currentImgWidth,
        height: currentImgHeight
      });
      let a = currentImgHeight ? currentImgHeight : 0
      heightArr[index] =  minHeight + a;
    }
   }
  return (
      <div
        className="waterfall"
        id="waterfall"
        style={{
          // width: "70%",
          width: '1000px',
          position: "relative",
          height: Math.max(...heightArr) ? `${Math.max(...heightArr)}px` : '70vh',
          overflow: "hidden",
          marginTop: '10px'
        }}
      >

        {imgArr.map((item, index) => (
          <div
            key={index}
            style={{
              width: '250px',
              position: "absolute",
              top: `${itemsImgProps[index].top}px`,
              left: `${itemsImgProps[index].left}px`,
            }}
          >
            <img
              id={"img"+index}
              src={item}
              // id={"img" + index}
              style={{
              // position: "absolute",
              // top: `${itemsImgProps[index].top}px`,
              // left: `${itemsImgProps[index].left}px`,
              // width: `${child.style.width}px`,
              // width: '23%',
              width: '250px',
              padding: '10px',
              boxSizing: "border-box"
            }}/>
          </div>
        ))}
      </div>
    );
  
}

export default WaterFall;
