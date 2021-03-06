import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';
const yearAnimal = ['🐭', '🐮', '🐯', '🐰', '🐲', '🐍', '🐴', '🐑', '🐒', '🐔', '🐶', '🐷'];
const getYearAnimal = (year: string | number) => {
  year = Number(year);
  let index = year % 12 - 3;
  if(!index) index += 12;
  return yearAnimal[index - 1];
}
function PigeonholeItem(props: { everyYearList: any[], year: string}) {

  const history = useHistory();
  return (
    <div className="pigeonhole-item">
      <h2 className="year">
        <span>{ props.year }</span>
        <span>{ getYearAnimal(props.year) }</span>
      </h2>
      <div className="list">
        {
          props.everyYearList.map((item: any, index: number) => {
            return (
              <div className="list-item" key={index} onClick={  ()=> { history.push(`/article?articleId=${item.articleId}`,  { articleId: item.articleId })} }>
                <div>{item.title}</div>
                <div className="list-item-time">{item.tsp.slice(0,10)}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );

}

export default PigeonholeItem;
