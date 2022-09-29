import { useEffect } from 'react';

import axios from 'axios';
import { GetStaticProps } from 'next';

import { VerticalLayout } from 'components/layout/VerticalLayout';
import { MainScreen } from 'components/sections/MainScreen';
import { IAirQuality } from 'interface/apiInterface/airQualityInterface';
import { AxiosRes } from 'interface/responseInterface/axios';
// const Index = ({ apiAirquality }: { apiAirquality: object }) => {
const Index = ({ apiAirquality }: { apiAirquality: AxiosRes<IAirQuality> }) => {
  useEffect(() => {
    console.log(apiAirquality);
  }, []);

  return (
    <VerticalLayout>
      <MainScreen airQuality={apiAirquality.response.body.item} />
    </VerticalLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageNo = '1';
  const numOfRows = '10';
  const act = 'json';
  const year = '2016';
  const scode = '119';

  const headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=euc-kr',
    Accept: '*/*',
  };

  const apiAirquality = await axios
    .get(
      `http://data.humetro.busan.kr/voc/api/open_api_airquality.tnn?ServiceKey=${process.env.PUBLIC_DATA_SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&act=${act}&year=${year}&scode=${scode}`,
      { headers }
    )
    .then(async ({ data }) => {
      return data;
    });
  // const apiAirqualityRes = await fetch(
  //   `http://data.humetro.busan.kr/voc/api/open_api_airquality.tnn?ServiceKey=${process.env.PUBLIC_DATA_SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&act=${act}&year=${year}&scode=${scode}`,
  //   {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json', charset: 'euc-kr' },
  //   }
  // );
  // const apiAirquality = await apiAirqualityRes.json();

  return { props: { apiAirquality } };
};

export default Index;
