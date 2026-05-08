import React from 'react'
import { RotateCcw, ScanSearch } from 'lucide-react'
import ImageDetails from './ImageDetails'
import ResultCard from './ResultCard'
import './InsightPanel.css'

function InsightPanel({
  faceCount,
  imageDetails,
  onAnalyse,
  onReset,
  uploadedFile,
}) {
  return (
    <aside className="insight-panel" aria-label="Image analysis">
      <div className="panel-header">
        <div>
          <p className="section-label">Analysis</p>
          <h2>Crowd insight</h2>
        </div>
      </div>

      <ImageDetails details={imageDetails} />

      {faceCount !== null ? (
        <ResultCard faceCount={faceCount} />
      ) : (
        <div className="result-placeholder">
          <strong>Waiting for scan</strong>
          <span>Results will appear here after analysis.</span>
        </div>
      )}

      <div className="button-row">
        <button
          className="analyse-button"
          type="button"
          onClick={onAnalyse}
          disabled={!uploadedFile || !imageDetails}
        >
          <ScanSearch size={18} />
          <span>Analyse image</span>
        </button>

        {uploadedFile && (
          <button
            className="reset-button"
            type="button"
            onClick={onReset}
            aria-label="Reset image"
          >
            <RotateCcw size={18} />
            <span>Reset</span>
          </button>
        )}
      </div>
    </aside>
  )
}

export default InsightPanel
