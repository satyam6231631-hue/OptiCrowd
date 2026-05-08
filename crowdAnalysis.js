export function isImageFile(file) {
  return file && file.type.startsWith('image/')
}

export function getImageDetails(file) {
  return {
    name: file.name,
    sizeKb: Math.round(file.size / 1024),
    type: file.type,
  }
}

export function estimateFaceCount(imageDetails) {
  const estimatedCount = Math.round(imageDetails.sizeKb / 40 + 12)

  if (estimatedCount < 4) {
    return 4
  }

  if (estimatedCount > 75) {
    return 75
  }

  return estimatedCount
}

export function getDensityInfo(faceCount) {
  if (faceCount >= 45) {
    return {
      label: 'High density',
      level: 'high',
    }
  }

  if (faceCount >= 22) {
    return {
      label: 'Medium density',
      level: 'medium',
    }
  }

  return {
    label: 'Low density',
    level: 'low',
  }
}
