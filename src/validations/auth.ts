import z from "zod";

export const signupSchema = z
  .object({
    first_name: z.string().min(1, { error: 'First name is Required.' }),
    last_name: z.string().min(1, { error: 'Last name is Required.' }),
    email: z
      .email({ error: 'Not Valid Email' })
      .min(1, { error: 'Email name is Required.' }),
    password: z.string().min(6, { error: 'Not Valid Password' }),
    confirm_password: z.string().min(6, { error: 'Not Valid Password' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    error: 'Confirm password must be equal to password.',
    path: ['confirm_password'],
  });

export type ISignup = z.infer<typeof signupSchema>;
