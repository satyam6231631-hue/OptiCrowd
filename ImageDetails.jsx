import React from 'react'
import './ImageDetails.css'

function ImageDetails({ details }) {
  if (!details) {
    return (
      <dl className="image-details muted">
        <div>
          <dt>File</dt>
          <dd>-</dd>
        </div>
        <div>
          <dt>Size</dt>
          <dd>-</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>-</dd>
        </div>
      </dl>
    )
  }

  return (
    <dl className="image-details">
      <div>
        <dt>File</dt>
        <dd>{details.name}</dd>
      </div>
      <div>
        <dt>Size</dt>
        <dd>{details.sizeKb} KB</dd>
      </div>
      <div>
        <dt>Type</dt>
        <dd>{details.type}</dd>
      </div>
    </dl>
  )
}

export default ImageDetails
