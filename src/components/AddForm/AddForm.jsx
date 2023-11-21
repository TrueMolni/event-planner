import React from 'react';
import { useForm, Resolver } from 'react-hook-form';

import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  date: yup.date().required('Date is required'),
  time: yup.string().required('Time is required'),
  image: yup.string().url('Invalid URL').required('Image URL is required'),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolver,
  });

  const onSubmit = data => {
    console.log(data); // Обробка даних форми
  };

  return (
    <div>
      <h1>Create new event</h1>
      <form
        className="bg-white p-4 rounded shadow max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Title
          <input
            {...register('title')}
            type="text"
            className="border p-2 w-full"
          />
          <p className="text-red-500">{errors.title?.message}</p>
        </label>

        <label className="mt-2 block text-sm font-medium leading-6 text-gray-900">
          Description
          <textarea
            {...register('description')}
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 
              text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </label>
        <label>
          Select date
          <input
            {...register('date')}
            type="text"
            className="border p-2 w-full"
          />
          <p className="text-red-500">{errors.date?.message}</p>
        </label>
        <label>
          Select time
          <input
            {...register('time')}
            type="text"
            className="border p-2 w-full"
          />
          <p className="text-red-500">{errors.time?.message}</p>
        </label>
        <label>
          Add picture
          <input
            {...register('image')}
            type="text"
            className="border p-2 w-full"
          />
          <p className="text-red-500">{errors.image?.message}</p>
        </label>
        <label>
          Location
          <input
            {...register('location')}
            type="text"
            className="border p-2 w-full"
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
