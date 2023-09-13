'use client'

import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
 
import { useSearchParams, useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import useKeypress from 'react-use-keypress'
import type { ImageProps } from '../lib/types'
import SharedModal from './SharedModal'

export default function Modal({
  images,
}: {
  images: ImageProps[]
}) {
  let overlayRef = useRef<HTMLDivElement | null >(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  const photoId = searchParams?.get('useId')
  let index = Number(photoId)

  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(index)

  function handleClose() {
    router.push('/', undefined)
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal)
    router.push(
      `/gallery/modal?photoId=${newVal}`
    )
  }

  useKeypress('ArrowRight', () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1)
    }
  })

  useKeypress('ArrowLeft', () => {
    if (index > 0) {
      changePhotoId(index - 1)
    }
  })

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  )
}