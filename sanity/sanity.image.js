import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from '@/sanity/sanity.client';

export const getCroppedImageSrc = (
  image, // Details on this type in the appendix
) => {

  const imageRef = image?.asset?._ref
  const crop = image?.crop


  // get the image's og dimensions
  const { width, height } = getImageDimensions(imageRef)

  if (Boolean(crop)) {
    // compute the cropped image's area
    const croppedWidth = Math.floor(width * (1 - (crop.right + crop.left)))

    const croppedHeight = Math.floor(height * (1 - (crop.top + crop.bottom)))

    // compute the cropped image's position
    const left = Math.floor(width * crop.left)
    const top = Math.floor(height * crop.top)

    // gather into a url
    return urlFor(imageRef)
            .rect(left, top, croppedWidth, croppedHeight)
            .url()
  }

  return urlFor(imageRef).url()
}