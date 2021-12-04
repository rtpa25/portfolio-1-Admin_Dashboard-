/** @format */

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100vh;
  top: 3.5rem;
`;

const Wrapper = styled.div``;
const Menu = styled.div`
  margin-bottom: 0.625rem;
`;
const Title = styled.h3``;
const List = styled.ul``;
const ListItem = styled.li`
  padding: 0.625rem;
  cursor: pointer;
  display: flex;
  border-radius: 1.25rem;
  align-items: center;
  &:hover {
    background-color: rgb(236, 236, 255);
  }
  &:active {
    background-color: rgb(236, 236, 255);
  }
`;

const Sidebar: React.FC = () => {
  const token = Cookies.get('token');
  if (token) {
    return (
      <Container className='sticky bg-gray-50'>
        <Wrapper className='p-5 text-gray-700'>
          <Menu>
            <Title className='text-xl text-gray-500'>Dashboard</Title>
            <List className='p-1.5 text-lg'>
              <Link to='/'>
                <ListItem>
                  <LineStyle style={{ fontSize: 30 }} className='mr-2' />
                  Home
                </ListItem>
              </Link>
              <Link to={'/Analytics'}>
                <ListItem>
                  <Timeline style={{ fontSize: 30 }} className='mr-2' />
                  Analytics
                </ListItem>
              </Link>
              <Link to={'/sales'}>
                <ListItem>
                  <TrendingUp style={{ fontSize: 30 }} className='mr-2' />
                  Sales
                </ListItem>
              </Link>
            </List>
            <Title className='text-xl text-gray-500'>Quick Menu</Title>
            <List className='p-1.5 text-lg'>
              <Link to={'/users'}>
                <ListItem>
                  <PermIdentity style={{ fontSize: 30 }} className='mr-2' />
                  Users
                </ListItem>
              </Link>
              <Link to='/products'>
                <ListItem>
                  <Storefront style={{ fontSize: 30 }} className='mr-2' />
                  Products
                </ListItem>
              </Link>
              <Link to={'/transactions'}>
                <ListItem>
                  <AttachMoney style={{ fontSize: 30 }} className='mr-2' />
                  Transactions
                </ListItem>
              </Link>
              <Link to={'/reports'}>
                <ListItem>
                  <BarChart style={{ fontSize: 30 }} className='mr-2' />
                  Reports
                </ListItem>
              </Link>
            </List>
            <Title className='text-xl text-gray-500'>Notifications</Title>
            <List className='p-1.5 text-lg'>
              <ListItem>
                <MailOutline style={{ fontSize: 30 }} className='mr-2' />
                Mail
              </ListItem>
              <ListItem>
                <DynamicFeed style={{ fontSize: 30 }} className='mr-2' />
                Feedback
              </ListItem>
              <ListItem>
                <ChatBubbleOutline style={{ fontSize: 30 }} className='mr-2' />
                Messages
              </ListItem>
            </List>
            <Title className='text-xl text-gray-500'>Staff</Title>
            <List className='p-1.5 text-lg'>
              <ListItem>
                <WorkOutline style={{ fontSize: 30 }} className='mr-2' />
                Manage
              </ListItem>
              <ListItem>
                <Timeline style={{ fontSize: 30 }} className='mr-2' />
                Analytics
              </ListItem>
              <ListItem>
                <Report style={{ fontSize: 30 }} className='mr-2' />
                Reports
              </ListItem>
            </List>
          </Menu>
        </Wrapper>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Sidebar;
