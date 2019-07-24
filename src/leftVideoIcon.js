import React, {
    Component
} from 'react';

export default function LeftVideoIcon(props) {
return(
      <div className="comp_recommend__left-wrap-icons-video flexWH">
        <div className = "comp_recommend__left-wrap-icons-video-edge" >
          <img
            style={{ height: '100%', width: '100%' }}
            mode="aspectFill"
            src = {
                'data:image/png;base64,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'
            }
          />
        </div>
      </div>
    )
}