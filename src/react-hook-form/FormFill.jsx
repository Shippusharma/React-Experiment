import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormFill = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  ///////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h6>React-Hook-Form</h6>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          FirstName
          <input {...register('firstName')} />
        </label>
        <br />
        <label>
          LastName
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
        </label>
        <br />
        <label>
          Age
          <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
        </label>
        <br />
        <label>
          Gender
          <select {...register('gender')}>
            <option value='female'>female</option>
            <option value='male'>male</option>
            <option value='other'>other</option>
          </select>
        </label>
        <br /> <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default FormFill;
