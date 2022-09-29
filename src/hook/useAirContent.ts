import { useState, useEffect } from 'react';

import airAualityDataSet from 'data/air-quality/airAualityDataSet.json';
import {
  IAirContents,
  AirAtomics,
} from 'interface/apiInterface/airQualityInterface';

const useAirContent = (
  atomic: AirAtomics
): [IAirContents, (atomic: AirAtomics) => void] => {
  const [pickAtomic, setPickAtomic] = useState<IAirContents>(
    airAualityDataSet.airflow
  );

  useEffect(() => {
    if (atomic !== undefined) {
      setPickAtomic(airAualityDataSet[atomic]);
    }
  }, [atomic]);

  const setValue = (value: AirAtomics) => {
    try {
      setPickAtomic(airAualityDataSet[value]);
    } catch (error) {
      console.log(error);
    }
  };
  return [pickAtomic, setValue];
};

export { useAirContent };
