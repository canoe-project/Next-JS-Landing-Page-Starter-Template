/**
 * @param {string} airflow 기류
 * @param {string} asbestos 석명
 * @param {string} co 일산화 탄소
 * @param {string} co2 이산화 탄소
 * @param {string} hcho 메탄
 * @param {string} humidity 습도
 * @param {string} no2 이산화 질소
 * @param {string} o3 오존
 * @param {string} pm10 미세 먼지
 * @param {string} rn 라돈
 * @param {string} temperature 온도
 * @param {string} tvoc 총휘발성유기화합물
 */
export type AirAtomics =
  | 'airflow'
  | 'asbestos'
  | 'co'
  | 'co2'
  | 'hcho'
  | 'humidity'
  | 'no2'
  | 'o3'
  | 'pm10'
  | 'rn'
  | 'temperature'
  | 'tvoc';

/**
 * @param {string} co 일산화 탄소
 * @param {string} no2 이산화 질소
 * @param {string} o3 오존
 * @param {string} pm10 미세 먼지
 */
export type AirQualityValue = 'co' | 'no2' | 'o3' | 'pm10';

export interface IAirQuality {
  airflow: string;
  asbestos: string;
  co: string;
  co2: string;
  hcho: string;
  humidity: string;
  measureDate: string;
  no2: string;
  o3: string;
  place: string;
  pm10: string;
  rn: string;
  scode: string;
  sname: string;
  temperature: string;
  tvoc: string;
}

export interface IAirContent {
  nameEN: string;
  nameKR: string;
  description: string;
  unit: string;
}

export interface IAirContents extends IAirContent {
  [key: string]: string;
}

export interface IBP {
  BPLO: number;
  BPHI: number;
}

export interface IAirValue {
  good: IBP;
  average: IBP;
  bad: IBP;
  veryBad: IBP;
}

export interface IAirValues extends IAirValue {
  [key: string]: IBP;
}
