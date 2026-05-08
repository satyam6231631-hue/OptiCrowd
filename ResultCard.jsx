import React from 'react'
import { Activity } from 'lucide-react'
import { getDensityInfo } from '../crowdAnalysis'
import './ResultCard.css'

function ResultCard({ faceCount }) {
  const density = getDensityInfo(faceCount)

  return (
    <section
      className={`result-card ${density.level}`}
      aria-label="Analysis result"
    >
      <div className="result-icon">
        <Activity size={22} />
      </div>
      <div className="result-copy">
        <p className="section-label">Analysis complete</p>
        <h2>
          <span>{faceCount}</span> faces detected
        </h2>
        <p className="result-text">
          OptiCrowd estimates this image as a {density.label.toLowerCase()} crowd
          sample.
        </p>
      </div>
    </section>
  )
}

export default ResultCard
