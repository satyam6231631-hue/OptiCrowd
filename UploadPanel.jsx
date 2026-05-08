import React from 'react'
import { ImagePlus, ScanSearch } from 'lucide-react'
import './UploadPanel.css'

function UploadPanel({
  errorMessage,
  fileInputKey,
  imagePreviewUrl,
  onFileChange,
  uploadedFile,
}) {
  return (
    <section className="upload-panel" aria-label="Upload image">
      <div className="panel-header">
        <div>
          <p className="section-label">Input</p>
          <h2>Image workspace</h2>
        </div>
        {uploadedFile && <span className="file-chip">Ready</span>}
      </div>

      <label className={imagePreviewUrl ? 'upload-box compact' : 'upload-box'}>
        <ImagePlus size={28} />
        <span>{uploadedFile ? 'Change image' : 'Choose an image'}</span>
        <small>JPG, PNG, WebP or any image file</small>
        <input
          key={fileInputKey}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </label>

      {imagePreviewUrl ? (
        <div className="preview-frame">
          <img
            className="preview-image"
            src={imagePreviewUrl}
            alt="Selected crowd preview"
          />
        </div>
      ) : (
        <div className="empty-preview">
          <ScanSearch size={38} />
          <span>No image selected</span>
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  )
}

export default UploadPanel
