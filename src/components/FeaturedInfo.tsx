/** @format */

import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div``;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0 1.25rem;
  padding: 1.875rem;
  border-radius: 0.625rem;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FeaturedTitle = styled.span`
  font-size: 1.25rem;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 0.625rem 0;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 1.875rem;
  font-weight: 600;
`;
const FeaturedMoenyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
`;
const FeaturedSub = styled.span`
  font-size: 0.938rem;
  color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Container className='w-full flex justify-between'>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoenyRate>
            -11.4 <ArrowDownward className='text-red-600' />
          </FeaturedMoenyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoenyRate>
            -1.4 <ArrowDownward className='text-red-600' />
          </FeaturedMoenyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,115</FeaturedMoney>
          <FeaturedMoenyRate>
            +2.4 <ArrowUpward className='text-green-600' />
          </FeaturedMoenyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </Container>
  );
};

export default FeaturedInfo;
