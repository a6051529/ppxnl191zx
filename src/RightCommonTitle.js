import React, {
    Component
} from 'react';

export default function RightCommonTitle(props) {
    const { item } = props;
    return(
      <div className="comp_recommend__right__common--title height45 flexHStart">
        <div className="comp_recommend__right__common--title-text" numberOfLines={1}>{item.loupan_name}</div>
      </div>
    )
}

