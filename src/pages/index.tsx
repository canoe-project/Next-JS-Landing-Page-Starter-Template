import { VerticalLayout } from 'components/layout/VerticalLayout';
import { MainScreen } from 'components/sections/MainScreen';

// const Index = ({ apiAirquality }: { apiAirquality: object }) => {
const Index = () => {
  return (
    <VerticalLayout>
      <MainScreen />
    </VerticalLayout>
  );
};

// export const getStaticProps: GetServerSideProps = async () => {
//   const pageNo = '1';
//   const numOfRows = '10';
//   const act = 'json';
//   const year = '2012';
//   const scode = '119';

//   const apiAirquality = await axios
//     .get(
//       `${process.env.AIR_QUALITY_DOMAIN}?ServiceKey=${process.env.PUBLIC_DATA_SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&act=${act}&year=${year}&scode=${scode}`
//     )
//     .then(async ({ data }) => {
//       return data;
//     });
//   return { props: { apiAirquality } };
// };

export default Index;
