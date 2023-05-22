// import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { imgBuilder } from '~/lib/sanity.client'

export const SanityImage = ({ src, height, width, alt, ...rest }) => {
  return (
    <Image
      src={imgBuilder.image(src).width(width).height(height).url()}
      width={width}
      height={height}
      alt={alt}
      {...rest}
    />
  )
}
