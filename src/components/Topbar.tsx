/** @format */

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  padding: 0 1.25rem;
`;
const TopLeft = styled.div``;
const TopRight = styled.div``;
const Logo = styled.span``;

const Topbar = () => {
  const navigate = useNavigate();
  const signoutHandler = () => {
    Cookies.remove('token');
    navigate('/login');
    window.location.reload();
  };

  const token = Cookies.get('token');

  const authUserNavbar = (
    <TopRight className='flex items-center justify-between'>
      <button onClick={signoutHandler}>Signout</button>
    </TopRight>
  );
  const tester = (
    <div>
      <span className='mr-5'>AdminEmail: 'test0@email.com'</span>
      <span>AdminPassword: 'test0123'</span>
    </div>
  );
  return (
    <Container className='w-full bg-white h-14'>
      <Wrapper className='flex items-center justify-between h-full'>
        <TopLeft>
          <Logo className='text-4xl font-semibold text-blue-900 cursor-pointer'>
            Nyka Admin.
          </Logo>
        </TopLeft>
        {token ? authUserNavbar : tester}
      </Wrapper>
    </Container>
  );
};

export default Topbar;
