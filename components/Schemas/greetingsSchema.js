import * as yup from 'yup';

export const greetingValidationSchema = yup.object().shape({
  introduction: yup.string().required('Please enter your Introduction Text 1!'),
  welcome: yup.string().required('Please enter your Introduction Text 2!'),
});
