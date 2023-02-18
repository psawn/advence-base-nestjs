import Z from 'zod';

const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

export const SignInSchema = Z.object({
  email: Z.string().email(),
  password: Z.string().regex(passwordRegex),
});

export type SignInSchemaType = Z.TypeOf<typeof SignInSchema>;
