import React, {
    Component
} from 'react';

export default function RightCommonPrice(props) {
const {new_price, unit_price, round_loupan_price, round_loupan_price_unit, history_price, history_price_unit} = props.item;

    const have_new_price = (new_price.show_price && new_price.show_price.length>0 && new_price.show_price !='0')
    const have_unit_price = !!unit_price
    const price_pending_desc = !!new_price.price_pending_desc? new_price.price_pending_desc : '售价待定'

    // 新价格(new_price)->老价格(unit_price)->周边价格->往期价格
    return(
      <div className="comp_recommend__right__common--price height45 flexH">
        {
          !!have_new_price &&
          <div className="comp_recommend__right__common--price-text">{new_price.show_price}{new_price.unit}</div>
        }
        {
          !have_new_price && !!have_unit_price &&
          <div className="comp_recommend__right__common--price-text">{unit_price}元/m²</div>
        }
        {
          !have_new_price && !have_unit_price &&
          <div className="comp_recommend__right__common--price-pending">
            <div className="comp_recommend__right__common--price-pending-text">{price_pending_desc}</div>
            {
              !!round_loupan_price &&
              <div className="comp_recommend__right__common--price-pending-round">
                <div className="comp_recommend__right__common--price-pending-round-text">周边&nbsp;</div>
                <div className="comp_recommend__right__common--price-pending-round-prdesc">{round_loupan_price}</div>
                <div className="comp_recommend__right__common--price-pending-round-text">{round_loupan_price_unit}</div>
              </div>
            }
            {
              !round_loupan_price && !! history_price &&
              <div className="comp_recommend__right__common--price-pending-round">
                <div className="comp_recommend__right__common--price-pending-round-text">往期价格&nbsp;</div>
                <div className="comp_recommend__right__common--price-pending-round-prdesc">{history_price}</div>
                <div className="comp_recommend__right__common--price-pending-round-text">{history_price_unit}</div>
              </div>
            }
          </div>
        }
      </div>
    )    
}