import * as yup from 'yup';

export const iceBreakersValidationSchema = yup.object().shape({
  iceBreaker1Heading: yup.string().required('Please enter the Heading!'),
  iceBreaker1Reply: yup.string().required('Please enter the Reply!'),
  iceBreaker2Heading: yup.string().required('Please enter the Heading!'),
  iceBreaker2Reply: yup.string().required('Please enter the Reply!'),
  iceBreaker3Heading: yup.string().required('Please enter the Heading!'),
  iceBreaker3Reply: yup.string().required('Please enter the Reply!'),
  iceBreaker4Heading: yup.string().required('Please enter the Heading!'),
  iceBreaker4Reply: yup.string().required('Please enter the Reply!'),
});
