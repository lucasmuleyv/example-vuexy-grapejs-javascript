'use client'

import grapesjs, { Editor } from 'grapesjs'
import GjsEditor from '@grapesjs/react'

export default function DefaultEditor() {
  const onEditor = editor => {
    console.log('Editor loaded', { editor })
  }

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss='https://unpkg.com/grapesjs/dist/css/grapes.min.css'
      options={{
        height: '100vh',
        storageManager: false
      }}
      onEditor={onEditor}
    />
  )
}
