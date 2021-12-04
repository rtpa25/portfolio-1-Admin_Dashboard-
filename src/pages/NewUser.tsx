/** @format */

import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
  margin-left: 5rem;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NuewUserItem = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
  margin-right: 1.25rem;
  label {
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input {
    height: 2.875rem;
    padding: 0.625rem;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
const NewUserGender = styled.div`
  display: flex;
  align-items: center;
  input {
    height: 1rem;
    width: 1rem;
  }
  label {
    margin: 0.625rem;
    font-size: 1.125rem;
    color: #555;
  }
`;
const NewUserSelect = styled.select`
  height: 2.5rem;
  border-radius: 5px;
`;
const NewUserButton = styled.button`
  border-radius: 5px;
  padding: 1rem;
  width: 10rem;

  background-color: teal;
  color: white;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle className='text-3xl font-semibold'>New User</NewUserTitle>
      <NewUserForm>
        <NuewUserItem>
          <label>Username</label>
          <input type='text' placeholder='john' />
        </NuewUserItem>
        <NuewUserItem>
          <label>Full Name</label>
          <input type='text' placeholder='John Smith' />
        </NuewUserItem>
        <NuewUserItem>
          <label>Email</label>
          <input type='text' placeholder='pandaronit25@gmail.com' />
        </NuewUserItem>
        <NuewUserItem>
          <label>Password</label>
          <input type='text' placeholder='******' />
        </NuewUserItem>
        <NuewUserItem>
          <label>Phone</label>
          <input type='text' placeholder='+91-9861736576' />
        </NuewUserItem>
        <NuewUserItem>
          <label>Address</label>
          <input type='text' placeholder='BBSR | India' />
        </NuewUserItem>
        <NuewUserItem>
          <label>Gender</label>
          <NewUserGender>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label htmlFor='other'>Other</label>
          </NewUserGender>
        </NuewUserItem>
        <NuewUserItem>
          <label>Active</label>
          <NewUserSelect name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </NewUserSelect>
        </NuewUserItem>
      </NewUserForm>
      <NewUserButton>Create</NewUserButton>
    </Container>
  );
};

export default NewUser;
