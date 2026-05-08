import React, { useEffect, useState } from 'react'
import './App.css'
import DashboardHeader from './components/DashboardHeader'
import InsightPanel from './components/InsightPanel'
import UploadPanel from './components/UploadPanel'
import {
  estimateFaceCount,
  getImageDetails,
  isImageFile,
} from './crowdAnalysis'

function App() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')
  const [faceCount, setFaceCount] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [fileInputKey, setFileInputKey] = useState(0)

  const imageDetails = uploadedFile ? getImageDetails(uploadedFile) : null

  useEffect(() => {
    if (!uploadedFile) {
      setImagePreviewUrl('')
      return
    }

    const previewUrl = URL.createObjectURL(uploadedFile)

    setImagePreviewUrl(previewUrl)

    return () => {
      URL.revokeObjectURL(previewUrl)
    }
  }, [uploadedFile])

  function handleFileChange(event) {
    const selectedFile = event.target.files[0]

    setFaceCount(null)
    setErrorMessage('')

    if (!selectedFile) {
      setUploadedFile(null)
      return
    }

    if (!isImageFile(selectedFile)) {
      setUploadedFile(null)
      setErrorMessage('Please choose an image file.')
      setFileInputKey((currentKey) => currentKey + 1)
      return
    }

    setUploadedFile(selectedFile)
  }

  function handleAnalyse() {
    if (!imageDetails) {
      return
    }

    setFaceCount(estimateFaceCount(imageDetails))
  }

  function handleReset() {
    setUploadedFile(null)
    setImagePreviewUrl('')
    setFaceCount(null)
    setErrorMessage('')
    setFileInputKey((currentKey) => currentKey + 1)
  }

  return (
    <main className="app-shell">
      <DashboardHeader />

      <section className="dashboard-grid">
        <UploadPanel
          errorMessage={errorMessage}
          fileInputKey={fileInputKey}
          imagePreviewUrl={imagePreviewUrl}
          onFileChange={handleFileChange}
          uploadedFile={uploadedFile}
        />

        <InsightPanel
          faceCount={faceCount}
          imageDetails={imageDetails}
          onAnalyse={handleAnalyse}
          onReset={handleReset}
          uploadedFile={uploadedFile}
        />
      </section>
    </main>
  )
}

export default App
