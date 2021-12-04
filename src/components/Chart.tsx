/** @format */

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
`;

interface ChartProps {
  title: string;
  data: any;
  dataKey: string;
  grid: any;
}

const Chart: React.FC<ChartProps> = ({ title, data, dataKey, grid }) => {
  return (
    <Container className='p-5 m-5'>
      <ChartTitle className='mb-5'>{title}</ChartTitle>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
