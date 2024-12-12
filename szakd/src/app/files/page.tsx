import Container from '@/components/container'
import MultiFileDropzoneUsage from '@/components/fileUpload/upload'
import Footer from '@/components/footer'
import React from 'react'

export default function File() {
  return (
    <Container>
      <MultiFileDropzoneUsage/>
      <Footer/>
    </Container>
  )
}

