import React, { Component }  from 'react';
import LeftSmallIcon from './leftSmallIcon';
import LeftVideoIcon from './leftVideoIcon';
import RightCommonTitle from './RightCommonTitle';
import RightCommonLocation from './RightCommonLocation';
import RightCommonPrice from './RightCommonPrice';

export default function Item(props) {
    const { item } = props;
    return <div className="comp_recommend-wrap">
    <div className="comp_recommend" onClick={() => this.handleClickRecommend(item)}>
      <div className="comp_recommend__left">
        <div className="comp_recommend__left-wrap">
          <img
            style={{ height: '100%', width: '100%' }}
            mode="aspectFill"
            src={item.default_image}
          />
          <div className="comp_recommend__left-wrap-icons">
            <LeftVideoIcon item={item} />
            <div className="comp_recommend__left-wrap-icons-more">
              {
                // @ts-ignore 
                global.currentPackage == 'ajk' && !!item.have_wechat && LeftSmallIcon('WECHAT')
              }
              {!!item.have_quanjing && LeftSmallIcon('PANO')}
              {!!item.have_aerial_photo && LeftSmallIcon('AERIAL')}
            </div>
          </div>
        </div>
      </div>
      <div className="comp_recommend__right">
        <div className="comp_recommend__right__common">
          <RightCommonTitle item={item} />
          <RightCommonLocation item={item} />
          <RightCommonPrice item={item} />
          {/* <RightCommonTags item={item} /> */}
        </div>
        <div className="comp_recommend__right__more">
          {/* <RightMoreFilter item={item} /> */}
          {/* <RightMoreAdvertise item={item} /> */}
        </div>
      </div>
    </div>
  </div>
}