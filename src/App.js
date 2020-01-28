import React from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import './App.css';


const generateItems = numItems =>
  Array(numItems)
    .fill(true)
    .map(_ => ({
      key: Math.round(Math.random() * 10),
      label: Math.random()
        .toString(36)
        .substr(2),
    }));

    const Row = ({ data, index, style }) => {
      // Data passed to List as "itemData" is available as props.data
      const item = data[index]
      return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
          Label: {item.label}, key:  {item.key} 
        </div>
      );
    }


export default () => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        itemCount={1000}
        itemSize={35}
        height={500}
        width={500}
        itemData={generateItems(100)}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
  )
