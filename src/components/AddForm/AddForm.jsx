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

  return (
    <div>
      <h1 className="text-[#3F3F3F] font-semibold text-[24px] leading-9 ">
        Create new event
      </h1>
      <form
        className="bg-white p-4 rounded shadow max-w-md mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Title
          <input
            {...register('title')}
            value={title}
            type="text"
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.title?.message}</p>
        </label>

        <label className="mt-2 block text-sm font-medium leading-6 text-gray-900">
          Description
          <textarea
            {...register('description')}
            name="description"
            value={description}
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 
              text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </label>
        <label>
          Select date
          <input
            {...register('date')}
            type="text"
            name="date"
            value={date}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.date?.message}</p>
        </label>
        <label>
          Select time
          <input
            {...register('time')}
            type="text"
            name="time"
            value={time}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.time?.message}</p>
        </label>
        <label>
          Add picture
          <input
            {...register('image')}
            name="image"
            type="text"
            value={image}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.image?.message}</p>
        </label>
        <label>
          Location
          <input
            {...register('location')}
            name="location"
            type="text"
            value={location}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <p className="text-red-500">{errors.location?.message}</p>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
