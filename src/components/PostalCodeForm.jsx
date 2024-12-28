import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStart, fetchSuccess, fetchFailure } from '../redux/postalSlice';

function PostalCodeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data)
    const { pincode } = data;
    if(isNaN(pincode)){
      alert('Please enter a valid 6-digit pincode, alphabets not allowed.')
      return;
    }
    dispatch(fetchStart());
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const result = await response.json();
      if(result[0].Status === "Success"){
        dispatch(fetchSuccess(result[0].PostOffice));
        navigate('/results');
      }
      else {
        dispatch(fetchFailure(result[0].Message || "Error fetching data."));
      }
    }
    catch (error) {
      dispatch(fetchFailure(error.message));
    }
    
  }

  return (
    <div className='form-container'>
      <h2>Enter Pincode</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        {...register("pincode", {
          required: "Pincode is required", 
          minLength: {value:6, message:"Pincode must be 6 digit"}, 
          maxLength: {value:6, message:"Pincode must be 6 digit"},
        })}
        className="form-input"  
        type="text" placeholder="Pincode"/>
        {errors.pincode && <p>{errors.pincode.message}</p>}
        <br />
        <button id='lookup-btn' type='submit'>Lookup</button>
      </form>
    </div>
  )
}

export default PostalCodeForm
