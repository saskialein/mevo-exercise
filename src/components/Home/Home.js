import React from 'react'

import ErrorBoundary from '../ErrorHandler/ErrorBoundary'
import Map from '../Map/Map'
import Mevo from '../Mevo/Mevo'

export default function Home() {
  return (
    <>
      <Mevo />
      <ErrorBoundary>
        <Map />
      </ErrorBoundary>
    </>
  )
}
