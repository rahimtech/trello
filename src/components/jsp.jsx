import { motion as M } from 'framer-motion'

export const Jsp = () => {
  return (
    <M.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      className="bg-black	text-white h-screen"
    >
      <div className="flex justify-center text-5xl	 h-screen	items-center">
        <M.div
          initial={{ y: '-130px' }}
          animate={{ y: 0 }}
          transition={{ duration: 4 }}
          className="overflow-hidden"
        >
          <div>
            <M.div
              initial={{ y: '-130px' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            >
              Welcome
            </M.div>
          </div>
          <div className="overflow-hidden">
            <div>
              <M.div
                initial={{ y: '-130px' }}
                animate={{ y: 0 }}
                transition={{ duration: 2.9, ease: 'easeInOut' }}
              >
                This Page is Example Of framerMotion
              </M.div>
            </div>
          </div>
        </M.div>
      </div>
    </M.div>
  )
}

export default Jsp
