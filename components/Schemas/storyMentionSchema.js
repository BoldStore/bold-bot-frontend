import * as yup from 'yup';

export const storyMentionValidationSchema = yup.object().shape({
  storyMention: yup
    .string()
    .required('Please enter your response to Story Mention!'),
});
