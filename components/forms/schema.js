import * as yup from 'yup'

export const FormSchema=yup.object({
    name:yup.string().min(2).required('Please enter your name'),
    email:yup.string().email().required('Please enter your email'),
    message:yup.string().required('Please enter some message'),
    company:yup.string().required('Please enter company name')
})