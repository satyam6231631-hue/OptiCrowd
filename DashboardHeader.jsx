import React from 'react'
import './DashboardHeader.css'

function DashboardHeader() {
  return (
    <section className="intro">
      <div>
        <p className="eyebrow">Computer vision dashboard</p>
        <h1>OptiCrowd</h1>
        <p>
          Upload a crowd image and get a quick density estimate with image
          metadata.
        </p>
      </div>
    </section>
  )
}

export default DashboardHeader
