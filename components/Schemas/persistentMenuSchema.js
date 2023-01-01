import * as yup from 'yup';

export const persistentMenuValidationSchema = yup.object().shape({
  menuOption1Heading: yup.string().required('Please enter the Heading!'),
  menuOption1Reply: yup.string().required('Please enter the Reply!'),
  menuOption2Heading: yup.string().required('Please enter the Heading!'),
  menuOption2Reply: yup.string().required('Please enter the Reply!'),
  webDataTitle: yup.string().required('Please enter the Heading!'),
  webDataUrl: yup
    .string()
    .required('Please enter the URL!')
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Please enter a valid URL!'
    ),
});
