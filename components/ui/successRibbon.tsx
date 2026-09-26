'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

interface SuccessRibbonProps {
  show: boolean
  message?: string
  onClose: () => void
}

export const SuccessRibbon = ({
  show,
  message = 'Message received, I will talk to you shortly.',
  onClose,
}: SuccessRibbonProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-100 flex justify-center pointer-events-none"
        >
          <div
            className="pointer-events-auto mt-4 mx-4 flex items-center gap-3 px-5 py-3 rounded-2xl
                       bg-emerald-500/95 text-black font-semibold shadow-2xl
                       border border-emerald-300/50 backdrop-blur-md
                       max-w-md w-full"
          >
            {/* Animated check icon */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 500 }}
              className="shrink-0"
            >
              <CheckCircle2 className="w-6 h-6 text-black" strokeWidth={2.5} />
            </motion.div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="flex-1 text-sm leading-snug"
            >
              {message}
            </motion.p>

        
            <button
              onClick={onClose}
              className="shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Thin shimmer line at bottom of the ribbon */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 5, ease: 'linear' }}
            className="absolute bottom-1 left-0 right-0 h-[2px] origin-left bg-black/30 rounded-full"
            style={{ maxWidth: '28rem', margin: '0 auto' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}