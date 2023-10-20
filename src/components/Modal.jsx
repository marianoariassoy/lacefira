import ReactPlayer from 'react-player'
import { Close } from '../icons/icons'

const Modal = ({ setCurrentVideo, currentVideo }) => {
  const handelClick = e => {
    setCurrentVideo(null)
    // if (e.target.classList.contains('dismiss')) {
    //   setCurrentVideo(null)
    // }
  }
  return (
    <div
      className='fade-in fixed bg-white/50 backdrop-blur h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50 p-8 lg:p-16'
      onClick={handelClick}
    >
      <div className='bg-black w-full max-w-5xl'>
        <ReactPlayer
          url={currentVideo}
          playing={true}
          controls={true}
          width='100%'
          height='100%'
          className='aspect-video object-cover'
        />
      </div>

      <span
        className='absolute dismiss top-8 right-8 text-black font-bold hover:opacity-60 text-3xl lg:text-5xl  cursor-pointer'
        onClick={handelClick}
      >
        <Close />
      </span>
    </div>
  )
}

export default Modal
