import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../data/data'

const Form = () => {
  type Inputs = {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
  }

  const lan = 'es'
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: 'australclimatizacion.ing@gmail.com',
      from: 'no-reply@australclimatizacion.com',
      from_name: 'Austral Ingeniería',
      subject: 'Contacto'
    }

    axios.post('http://australclimatizacion.com/backend/send-email.php', { ...data, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm font-medium mt-1 text-primary'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <span className='text-2xl font-bold'>{dataContact[lan].error}</span>
      ) : sended ? (
        <span className='text-3xl font-bold'>{dataContact[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4  '>
            <div>
              <input
                className='w-full border-2 border-black h-11  px-4'
                placeholder={dataContact[lan].name}
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-11  px-4'
                placeholder={dataContact[lan].city}
                {...register('city')}
              />
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-11  px-4'
                placeholder={dataContact[lan].email}
                {...register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-11  px-4'
                placeholder={dataContact[lan].location}
                {...register('location')}
              />
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-11  px-4'
                placeholder={dataContact[lan].phone}
                {...register('phone', { required: true })}
              />
              {errors.phone && <Error />}
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-11  px-4'
                placeholder={dataContact[lan].country}
                {...register('country')}
              />
            </div>
          </div>
          <textarea
            className='w-full border-2 border-black h-44  p-4 my-4 font-light'
            placeholder={dataContact[lan].message}
            {...register('message')}
          />

          <div className='flex justify-center'>
            {sending ? (
              <BeatLoader className='mt-6' />
            ) : (
              <button
                type='submit'
                id='button-form'
                className='font-bold text-white h-11 transition px-8'
              >
                {dataContact[lan].send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
