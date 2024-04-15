import React from 'react'
import {useForm} from 'react-hook-form';
import  axios  from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';

function Add() {
  const {register, handleSubmit} = useForm();

  const navi = useNavigate();

  function saveData(data){
    axios.post(" http://localhost:5000/users", data);
    //alert("Record Added.....")
    navi('/user/show');
  }
  return (
    <div className='container'>
      <center><h1><u>EMPLOYEE INFO:</u></h1></center>
        <form onSubmit={handleSubmit(saveData)} className='mt-5'>
            <label htmlFor='eid'>EMP ID:</label>
            <input type='number' id='eid' className='form-control'
            {...register('eid')}/>
            <br/><br/>
            <label htmlFor='n'>EMP NAME:</label>
            <input type='text' id='n' className='form-control'
            {...register('name')}/>
            <br/><br/>
            <label htmlFor='c'>EMP CITY:</label>
            <input type='text' id='c' className='form-control'
            {...register('city')}/>
            <br/><br/>
            <input type="submit" value="Register" className='btn btn-outline-success col-6 btn-lg'/>
            <input type="reset" value="Reset" className='btn btn-outline-warning col-6 btn-lg'/>
        </form>

    </div>
  )
}

export default Add