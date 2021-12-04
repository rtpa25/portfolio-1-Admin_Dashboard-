/** @format */

import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import WidgetLg from '../components/WidgetLg';
import WidgetSm from '../components/WidgetSm';
import { userData } from '../dummyData';

const Container = styled.div`
  flex: 4;
`;
const HomeWidgets = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        title={'User Analytics'}
        data={userData}
        dataKey={'Active User'}
        grid={'d'}
      />
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </Container>
  );
};

export default Home;
