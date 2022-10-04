import axios from 'axios';
import { GetServerSideProps } from 'next';

import { VerticalLayout } from 'components/layout/VerticalLayout';
import { MainScreen } from 'components/sections/MainScreen';
import { IAirQuality } from 'interface/apiInterface/airQualityInterface';
import { AxiosRes } from 'interface/responseInterface/axios';

const iconv = require('iconv-lite');
// const Index = ({ apiAirquality }: { apiAirquality: object }) => {
// import stationGroup from "data/stationGroup.json"
// import {setStation} from "store/subwayStationReducer"

const Index = ({ apiAirquality }: { apiAirquality: AxiosRes<IAirQuality> }) => {
  // const subwayState = useSelector((state: RootState) => state.subwayStation);
  // const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   dispatch(setStation())
  // }, []);

  return (
    <VerticalLayout>
      <MainScreen airQuality={apiAirquality.response.body?.item} />
    </VerticalLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const pageNo = '1';
  const numOfRows = '10';
  const act = 'json';
  const year = '2016';
  const scode = id !== undefined ? id : 95;

  const apiAirquality = await axios
    .get(
      `http://data.humetro.busan.kr/voc/api/open_api_airquality.tnn?ServiceKey=${process.env.PUBLIC_DATA_SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&act=${act}&year=${year}&scode=${scode}`,
      { responseType: 'arraybuffer' }
    )
    .then(async ({ data }) => {
      return JSON.parse(iconv.decode(data, 'EUC-KR'));
    });
  return { props: { apiAirquality } };
};

export default Index;
