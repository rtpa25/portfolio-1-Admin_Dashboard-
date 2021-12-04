/** @format */

import styled from 'styled-components';
import './WidgetLg.css';

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
  margin-right: 1.25rem;
`;

const Title = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
`;
const Row = styled.tr``;
const Header = styled.th`
  text-align: left;
`;
const DataUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.625rem;
`;
const UserName = styled.span``;
const DataDate = styled.td`
  font-weight: 300;
`;
const DataAmount = styled.td`
  font-weight: 300;
`;
const DataStatus = styled.td``;

const WidgetLg = () => {
  const Button: React.FC<{ type: string }> = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <Row>
          <Header>Customer</Header>
          <Header>Date</Header>
          <Header>Amount</Header>
          <Header>Status</Header>
        </Row>
        <Row>
          <DataUser>
            <Image src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <UserName>Susan Carol</UserName>
          </DataUser>
          <DataDate>2 Jun 2021</DataDate>
          <DataAmount>$122.00</DataAmount>
          <DataStatus>
            <Button type={'Approved'} />
          </DataStatus>
        </Row>
        <Row>
          <DataUser>
            <Image src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <UserName>Susan Carol</UserName>
          </DataUser>
          <DataDate>2 Jun 2021</DataDate>
          <DataAmount>$122.00</DataAmount>
          <DataStatus>
            <Button type={'Pending'} />
          </DataStatus>
        </Row>
        <Row>
          <DataUser>
            <Image src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <UserName>Susan Carol</UserName>
          </DataUser>
          <DataDate>2 Jun 2021</DataDate>
          <DataAmount>$122.00</DataAmount>
          <DataStatus>
            <Button type={'Pending'} />
          </DataStatus>
        </Row>
        <Row>
          <DataUser>
            <Image src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <UserName>Susan Carol</UserName>
          </DataUser>
          <DataDate>2 Jun 2021</DataDate>
          <DataAmount>$122.00</DataAmount>
          <DataStatus>
            <Button type={'Approved'} />
          </DataStatus>
        </Row>
        <Row>
          <DataUser>
            <Image src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <UserName>Susan Carol</UserName>
          </DataUser>
          <DataDate>2 Jun 2021</DataDate>
          <DataAmount>$122.00</DataAmount>
          <DataStatus>
            <Button type={'Declined'} />
          </DataStatus>
        </Row>
      </Table>
    </Container>
  );
};

export default WidgetLg;
