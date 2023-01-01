import * as yup from 'yup';

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .email('Please enter a valid email address!')
    .required('Please enter your email!'),
  insta_username: yup.string().required('Please enter your username!'),
});
