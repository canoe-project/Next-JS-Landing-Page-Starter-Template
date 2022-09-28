import React from 'react';

import { AtomicCard } from 'components/card/AtomicCard';
import { ProgressCard } from 'components/card/ProgressCard';
import { Room } from 'components/mesh/Room';
import { Thermometer } from 'components/Thermometer';
import { CommonToggle } from 'components/toggle/CommonToggle';

import { CanvasContainer } from './CanvasContainer';
import { CanvasLayer } from './CanvasLayer';

const MainScreen = () => {
  return (
    <div className="flex max-h-full max-w-[80%] w-full p-4 m-4 relative overflow-hidden">
      <ProgressCard
        content={`"미세먼지"란 대기 중에 떠다니거나 흩날려 내려오는 입자상물질인 먼지 중 다음의 흡입성먼지를 말합니다`}
        name="미세먼지 농도"
        value={42}
        index={1}
        unit="㎍/㎥"
        progress={100}
      />
      <div className="absolute flex right-4 top-6">
        <CommonToggle name="미세먼지 농도" value={true} />
        <CommonToggle name="총휘발성유기화합물" value={true} />
        <CommonToggle name="온도" value={true} />
      </div>
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
      <Thermometer value={50} />
      <div
        className={`relative w-full h-full transition-all ease-in-out delay-75 `}
      >
        <CanvasContainer>
          <CanvasLayer>
            <Room></Room>
          </CanvasLayer>
          <CanvasLayer>
            <Room></Room>
          </CanvasLayer>
          <CanvasLayer>
            <Room></Room>
          </CanvasLayer>
        </CanvasContainer>
      </div>
    </div>
  );
};

export { MainScreen };
