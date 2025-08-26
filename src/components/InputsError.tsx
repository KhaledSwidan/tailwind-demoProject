import { FieldError } from 'react-hook-form';

const InputsError = ({ error }: { error: FieldError | undefined }) => {
  return (
    <>{error && <span className='text-red-700 mt-1'>{error.message}</span>}</>
  );
};

export default InputsError;
