// import {} from 'react';

import { AirAtomics } from 'interface/apiInterface/airQualityInterface';
import { useAirContent } from 'src/hook/useAirContent';

type Props = {
  atomicSymbol: AirAtomics;
  value: number;
  index?: number | undefined;
  // atomicName?: string;
  // unit?: string | undefined;
};

const atomicPalette = [
  'text-atomicBlue',
  'text-atomicGreen',
  'text-atomicIndigo',
  'text-atomicYellow',
  'text-atomicRed',
];

const AtomicCard = ({ atomicSymbol, value, index }: Props) => {
  const [airContent] = useAirContent(atomicSymbol);
  // const [airQuality, setAirQuality] = useAirQuality(atomicSymbol);

  return (
    <div className="z-10 flex flex-col p-2 bg-white rounded w-[5.75em] h-[5.75em] shadow-md m-4 hover:scale-110 hover: duration-300">
      <p
        className={`text-lg font-bold ${
          index !== undefined
            ? atomicPalette[index % atomicPalette.length]
            : 'text-atomicRed'
        }  font-NanumSquareRound`}
      >{`${airContent.nameEN.toUpperCase()}`}</p>
      <p className="text-xs text-logo font-NanumSquareRound">{`${airContent.nameKR}`}</p>
      <p className="self-end mt-auto text-xs text-cardValue font-NanumSquareRound">{`${value} ${airContent.unit}`}</p>
    </div>
  );
};

export { AtomicCard };
