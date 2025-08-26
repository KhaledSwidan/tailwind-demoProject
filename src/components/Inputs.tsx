import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
};

const Inputs = ({ type, placeholder, register }: InputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
      />
    </>
  );
};

export default Inputs;
