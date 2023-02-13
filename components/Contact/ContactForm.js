import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
  //   Form validation state
  // const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const subjects = [
    'General inquiry',
    'Consulting inquiry',
    'Speaking request',
    'Feedback and suggestions',
    'Ibaslogic site feature request',
  ];

  const validationSchema = Yup.object({
    subject: Yup.string()
      .required('Please select a subject')
      .oneOf(subjects),
    name: Yup.string()
      .min(2, 'Not valid/ too short')
      .max(50, 'Too long!')
      .trim()
      .required('Name is required!'),
    email: Yup.string()
      .email('Enter a valid email!')
      .required('Email is required!'),
    message: Yup.string()
      .min(10, 'Message too short')
      .trim()
      .required('Write a brief message!'),
  });

  const formik = useFormik({
    initialValues: {
      subject: '',
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, submitProps) => {
      let config = {
        method: 'POST',
        // url: `${process.env.NEXT_PUBLIC_API_URL}/api/contactForm`,
        // NEXT_PUBLIC_API_URL=http://localhost:3000
        url: `/api/contactForm`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: values,
      };

      setShowSuccessMessage(false);
      setShowFailureMessage(false);
      setButtonText('Sending...');

      try {
        const response = await axios(config);

        if (response.status == 200) {
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          submitProps.resetForm();
        }
      } catch (error) {
        console.error(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
      } finally {
        setButtonText('Send');
      }
    },
  });

  const subjectOptions = subjects.map((subject, key) => (
    <option
      value={subject}
      // onChange={formik.handleChange}
      key={key}
    >
      {subject}
    </option>
  ));

  const renderError = (message) => (
    <p className="text-[#d5402b] text-sm px-3 md:px-[30px] mt-[10px] ">
      {message}
    </p>
  );

  return (
    <form
      name="contact v2"
      // method="post"
      className="flex-1 py-6"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid gap-6 md:gap-10 mb-6">
        <div>
          <select
            className="selectField bg-transparent outline-none border-b border-gray-400 px-3 md:px-[30px] py-4 text-gray-700 w-full"
            arial-label="I'd like to talk about"
            id="subject"
            {...formik.getFieldProps('subject')}
          >
            <option value={''} disabled>
              I'd like to talk about...
            </option>
            {subjectOptions}
          </select>
          {formik.touched.subject && formik.errors.subject
            ? renderError(formik.errors.subject)
            : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <input
              className="bg-transparent outline-none border-b border-gray-400 px-3 md:px-[30px] py-4 text-gray-700 w-full"
              type="text"
              placeholder="Name"
              id="name"
              aria-label="your-name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name &&
            formik.touched.name &&
            formik.errors.name
              ? renderError(formik.errors.name)
              : null}
          </div>
          <div>
            <input
              className="bg-transparent outline-none border-b border-gray-400 px-3 md:px-[30px] py-4 text-gray-700 w-full"
              type="email"
              placeholder="Email Address"
              aria-label="your-email"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email
              ? renderError(formik.errors.email)
              : null}
          </div>
        </div>

        <div>
          <textarea
            className="bg-[#f0efef] outline-none border-0 border-gray-400 p-3 md:p-[30px] text-gray-700 w-full"
            placeholder="Your message"
            aria-label="text-area"
            id="message"
            {...formik.getFieldProps('message')}
            rows="6"
          />
          {formik.touched.message && formik.errors.message
            ? renderError(formik.errors.message)
            : null}
        </div>

        <div data-netlify-recaptcha="true"></div>
      </div>
      <button
        type="submit"
        aria-label="submit-form"
        className="text-center py-3 px-8 bg-[#8a4baf] hover:opacity-80 text-white tracking-widest rounded-sm"
      >
        {buttonText}
      </button>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="text-green-500 font-semibold text-sm my-2">
            Thank you! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-[#d5402b]">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
// todo: use formik and yup for validation
