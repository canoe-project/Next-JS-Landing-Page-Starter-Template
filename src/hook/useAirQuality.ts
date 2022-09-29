import { useState, useEffect } from 'react';

import airAualityValue from 'data/air-quality/airAualityValue.json';
import {
  IAirValues,
  AirAtomics,
} from 'interface/apiInterface/airQualityInterface';

const useAirQuality = (
  atomic: AirAtomics
): [IAirValues, (atomic: AirAtomics) => void] => {
  const [pickAtomic, setPickAtomic] = useState<IAirValues>(airAualityValue.co);

  useEffect(() => {
    if (atomic !== undefined) {
      setPickAtomic(airAualityValue[atomic]);
    }
  }, [atomic]);

  const setValue = (value: AirAtomics) => {
    try {
      setPickAtomic(airAualityValue[value]);
    } catch (error) {
      console.log(error);
    }
  };

  return [pickAtomic, setValue];
};

export { useAirQuality };
