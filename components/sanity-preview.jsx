import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from '~/lib/sanity-client'

function onPublicAccessOnly() {
  if (window) {
    const willLogin = confirm(
      'You need to log in to sanity studio to access private data. Open in new tab?'
    )

    if (willLogin) {
      window.open(process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '')
    }
  }

  throw new Error(`Unable to load preview as you're not logged in`)
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
})
