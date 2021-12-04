/** @format */

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
  padding: 1.25rem;
`;
const TitleContainer = styled.div``;
const Title = styled.h1``;
const Button = styled.button`
  width: 5rem;
  padding: 0.313rem;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 1.25rem;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserShowImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;
const UserShowUsername = styled.span`
  font-weight: 600;
`;
const UserShowUserTitle = styled.span`
  font-weight: 300;
`;
const UserShowBottom = styled.div`
  margin-top: 1.25rem;
`;
const UserShowTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  color: #444;
`;
const UserShowInfoTitle = styled.span`
  margin-left: 0.625rem;
`;

const User = () => {
  return (
    <Container>
      <TitleContainer className='flex items-center justify-between'>
        <Title className='text-3xl font-semibold'>Edit User</Title>
        <Link to='/newUser'>
          <Button>Create</Button>
        </Link>
      </TitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            <UserShowTopTitle>
              <UserShowUsername>Anna Becker</UserShowUsername>
              <UserShowUserTitle>Software Engineer</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <PermIdentity className='text-base' />
              <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <CalendarToday className='text-base' />
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <PhoneAndroid className='text-base' />
              <UserShowInfoTitle>+91-9861736576</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <MailOutline className='text-base' />
              <UserShowInfoTitle>pandaronit25@gmail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <LocationSearching className='text-base' />
              <UserShowInfoTitle>BBSR | India</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
      </UserContainer>
    </Container>
  );
};

export default User;
