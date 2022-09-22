// import {} from 'react';

type Props = {
  atomicSymbol: string;
  atomicName: string;
  value: number;
  index?: number | undefined;
  unit?: string | undefined;
};

const atomicPalette = [
  'text-atomicBlue',
  'text-atomicGreen',
  'text-atomicIndigo',
  'text-atomicYellow',
  'text-atomicRed',
];

const AtomicCard = ({
  atomicSymbol,
  atomicName,
  value,
  index,
  unit,
}: Props) => {
  return (
    <div className="z-10 flex flex-col p-2 bg-white rounded w-[5.75em] h-[5.75em] shadow-md m-4 hover:scale-110 hover: duration-300">
      <p
        className={`text-lg font-bold ${
          index !== undefined
            ? atomicPalette[index % atomicPalette.length]
            : 'text-atomicRed'
        }  font-NanumSquareRound`}
      >{`${atomicSymbol}`}</p>
      <p className="text-xs text-logo font-NanumSquareRound">{`${atomicName}`}</p>
      <p className="self-end mt-auto text-xs text-cardValue font-NanumSquareRound">{`${value} ${
        unit !== undefined ? unit : ''
      }`}</p>
    </div>
  );
};

export { AtomicCard };
