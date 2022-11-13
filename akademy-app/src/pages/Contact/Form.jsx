import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBTextArea
} from 'mdb-react-ui-kit';

export default function Form() {
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    subject: '',
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-6' feedback='Invalid First Name.' invalid>
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationFname'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Invalid Last Name.' invalid>
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationLname'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Invalid Email.' invalid>
          <MDBInput
           value={formValue.email}
           name='email'
           onChange={onChange}
            type='email'
            className='form-control'
            id='validationEmail'
            label='Email'
            required
          />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Invalid Phone Number.' invalid>
          <MDBInput
          value={formValue.phone}
          name='phone'
          onChange={onChange}
            type='tel'
            className='form-control'
            id='validationPhone'
            label='Phone Number'
            required
          />
      </MDBValidationItem>
      <MDBValidationItem className='col-12' feedback='Invalid Message' invalid>
        <MDBTextArea
          value={formValue.subject}
          onChange={onChange}
          name='subject'
          id='subject'
          label='How can we help you'
          rows={4}
          required
        />
      </MDBValidationItem>

      <div className='col-12'>
        <MDBBtn type='submit' className='me-2 mb-1' color='danger'>Submit form</MDBBtn>
      </div>
    </MDBValidation>
  );
}