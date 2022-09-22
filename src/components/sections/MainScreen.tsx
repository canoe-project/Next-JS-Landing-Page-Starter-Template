import React from 'react';

import { AtomicCard } from 'components/card/AtomicCard';
import ProgressBarPI from 'components/progressBar/ProgressBarPI';
import { Thermometer } from 'components/Thermometer';

import { Floor } from './Floor';

const MainScreen = () => {
  return (
    <div className="flex max-h-full max-w-[80%] w-full p-4 m-4 relative">
      <div className="absolute flex bottom-0 left-2 m-2 items-end max-h-[15.5625em] max-w-[23.3125em] shrink-0 flex-wrap overflow-scroll scrollbar-hide">
        <AtomicCard
          atomicSymbol="CO"
          atomicName="일산화 탄소"
          value={12}
          unit="ppm"
          index={1}
        ></AtomicCard>
        <AtomicCard
          atomicSymbol="NO2"
          atomicName="일산화 질소"
          value={12}
          unit="ppm"
          index={2}
        ></AtomicCard>
        <AtomicCard
          atomicName="이산화 탄소"
          atomicSymbol="CO2"
          value={12}
          unit="ppm"
          index={3}
        ></AtomicCard>
        <AtomicCard
          atomicName="라돈"
          atomicSymbol="RN"
          value={12}
          unit="Bq/㎥"
          index={4}
        ></AtomicCard>
        <AtomicCard
          atomicName="오존"
          atomicSymbol="O3"
          value={12}
          unit="ppm"
          index={5}
        ></AtomicCard>
      </div>
      <Thermometer />
      <ProgressBarPI />
      <Floor />
    </div>
  );
};

export { MainScreen };
