import React from 'react'
import "./Story.css"
import { Avatar} from "@material-ui/core"

function Story({ images, profileSrc , title}) {
  return (
    <div 
      style={{
        backgroundImage: `url(${images})`
      }}
     className="story">
    <Avatar ClassName="story__avatar" src={profileSrc} />
    <h4> {title}</h4>
    </div>
  )
}

export default Story