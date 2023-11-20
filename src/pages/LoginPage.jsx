import LogInForm from "../components/LogInForm"
import imge from "../asset/coffeePh.jpg"



const ContactForm = () => {
  return (
    <div className="w-10/12 flex flex-row justify-center mx-auto mb-8">
    <div className='mx-auto mt-20 flex  max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row '>
        <div className="rounded-md">
          <img src={imge}  alt=""/>
        </div>
        <div className=' border lg:w-[50%] max-w-maxContent border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
        <h1 className='text-4xl leading-10 font-semibold text-richblack-900'>
          Log In
        </h1>
        <p className='text-richblack-500 text-sm'>
         Please log-in to your account and start the adventure
        </p>
        <div className='mt-7'>
          <LogInForm/>
        </div>
        </div>
    </div>
    </div>
   
  )
}

export default ContactForm