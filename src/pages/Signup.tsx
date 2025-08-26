import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Inputs from '../components/Inputs';
import InputsError from '../components/InputsError';
import { ISignup, signupSchema } from '../validations/auth';

const Signup = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ISignup>({
    mode: 'onChange',
    resolver: zodResolver(signupSchema),
  });
  const onSubmit: SubmitHandler<ISignup> = (data) => {
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };

    reset();
    console.log(user);
  };

  const signupInputs = [
    {
      type: 'text',
      placeholder: 'Enter your first name',
      register: register('first_name'),
    },
    {
      type: 'text',
      placeholder: 'Enter your last name',
      register: register('last_name'),
    },
    {
      type: 'email',
      placeholder: 'Enter your email',
      register: register('email'),
    },
    {
      type: 'password',
      placeholder: 'Enter your password',
      register: register('password'),
    },
    {
      type: 'password',
      placeholder: 'Confirm your password',
      register: register('confirm_password'),
    },
  ];

  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-10'>
          {/* Left Side - Title */}
          <div className='flex items-center justify-center p-8 bg-gradient-to-br from-purple-500 to-violet-600'>
            <h1 className='text-white font-extrabold text-3xl md:text-4xl text-center'>
              Create an Account
            </h1>
          </div>

          {/* Right Side - Form */}
          <div className='p-8'>
            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
              {signupInputs.map((input, index) => (
                <div key={index}>
                  <Inputs {...input} />
                  <InputsError error={errors[input.register.name]} />
                </div>
              ))}

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-3 px-6 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200'
              >
                Sign Up
              </button>
            </form>

            {/* Optional - Already have an account */}
            <p className='mt-6 text-center text-sm text-gray-500'>
              Already have an account?{' '}
              <a
                href='/login'
                className='text-purple-600 hover:text-purple-700 font-medium'
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
