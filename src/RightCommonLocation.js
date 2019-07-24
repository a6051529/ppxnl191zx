import React, {
    Component
} from 'react';

export default function RightCommonLocation(props) {
    const { item } = props;
    return(
      <div className="comp_recommend__right__common--location height45">
        <div className="comp_recommend__right__common--location-text">{item.region_title}&nbsp;{item.subregion_title}</div>
        {
          !!item.huxing_area && <div className="vertical-line"></div>
        }
        {
          !!item.huxing_area && <div className="comp_recommend__right__common--location-text">建面&nbsp;{item.huxing_area}</div>
        }
      </div>
    )
}