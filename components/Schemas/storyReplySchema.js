import * as yup from 'yup';

export const storyReplyValidationSchema = yup.object().shape({
  heading: yup.string().required('Please enter the Heading!'),
  reply: yup.string().required('Please enter the Reply!'),
});
