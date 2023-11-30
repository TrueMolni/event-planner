import { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import * as yup from 'yup';

import { addEvent } from 'shared/data/events-api';
import inititalState from './initialState';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  image: yup
    .string()
    .matches(/(https?:\/\/.*\.(?:png|jpg))/, 'Invalid URL')
    .required('Image URL is required'),
  location: yup.string().required('Location is required'),
});

const resolver: Resolver = async (data, context) => {
  try {
    return {
      values: await schema.validate(data, { abortEarly: false }),
      errors: {},
    };
  } catch (e) {
    return {
      values: {},
      errors: e.inner.reduce(
        (acc, error) => ({
          ...acc,
          [error.path]: {
            type: error.type,
            message: error.message,
          },
        }),
        {}
      ),
    };
  }
};

const AddForm = () => {
  const [data, setData] = useState({ ...inititalState });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolver,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = formData => {
    addEvent(formData);
    setData(inititalState);
  };

  const { title, description, time, date, image, location } = data;

  const labelStyle = 'text-accent-500';
  const inputStyle = 'border w-full mt-2 px-3 py-4 text-text-500 rounded';

  return (
    <div>
      <h1 className="text-[#3F3F3F] font-semibold text-[24px] leading-9 mb-6">
        Create new event
      </h1>
      <form
        className="bg-white p-4 rounded shadow max-w-md mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={labelStyle}>
          Title
          <input
            {...register('title')}
            value={title}
            type="text"
            className={inputStyle}
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.title?.message}</p>
        </label>

        <label className={labelStyle}>
          Description
          <textarea
            {...register('description')}
            name="description"
            value={description}
            rows={3}
            className="block py-4 px-3 w-full rounded-md border-0 py-1.5 
              text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </label>
        <label className={labelStyle}>
          {' '}
          Select date
          <input
            {...register('date')}
            type="text"
            name="date"
            value={date}
            className={inputStyle}
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.date?.message}</p>
        </label>
        <label className={labelStyle}>
          Select time
          <input
            {...register('time')}
            type="text"
            name="time"
            value={time}
            className={inputStyle}
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.time?.message}</p>
        </label>
        <label className={labelStyle}>
          Add picture
          <input
            {...register('image')}
            name="image"
            type="text"
            value={image}
            className={inputStyle}
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.image?.message}</p>
        </label>
        <label className={labelStyle}>
          Location
          <input
            {...register('location')}
            name="location"
            type="text"
            value={location}
            className={inputStyle}
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.location?.message}</p>
        </label>
        <button
          type="submit"
          className="bg-accent-500 text-white px-3 py-4 mt-10 
          rounded cursor-pointer hover:bg-hover-500 transition-colors"
        >
          Add event
        </button>
      </form>
    </div>
  );
};

export default AddForm;
