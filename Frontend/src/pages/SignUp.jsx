import { useForm } from 'react-hook-form';

 export default function SignUp()
{       
    const {register,handleSubmit,formState: { errors },} = useForm();

    
    return (
        <form onSubmit={handleSubmit((data)=>console.log(data))}>

        <input {...register('firstName')} placeholder='Enter your firstName ' />
        <input {...register('email')} />
        <input {...register('password')}/>
        <input {...register('confirmPassword')} />
        </form>
        

    )
}

// {
//     // name:"firstNmae"
//     ONCHhange automatich handle by theract form
// }