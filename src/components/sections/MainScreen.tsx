import { useState, ReactNode, useEffect, WheelEvent, MouseEvent } from 'react';

import { useSelector } from 'react-redux';

import { AtomicCard } from 'components/card/AtomicCard';
import { ProgressCard } from 'components/card/ProgressCard';
import Room from 'components/mesh/Room';
import { Thermometer } from 'components/Thermometer';
import { CommonToggle } from 'components/toggle/CommonToggle';
import {
  AirAtomics,
  IAirQuality,
} from 'interface/apiInterface/airQualityInterface';
import { RootState } from 'store/store';

import { CanvasContainer } from './CanvasContainer';
import { CanvasLayer } from './CanvasLayer';

interface Props {
  children?: ReactNode;
  airQuality: IAirQuality[];
}

const MainScreen = ({ airQuality }: Props) => {
  const [curPage, setCurPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [selctAtomic] = useState<AirAtomics[]>([
    'co',
    'co2',
    'o3',
    'pm10',
    'rn',
  ]);
  const [currentAir, setCurrentAir] = useState<IAirQuality>();

  // const dispatch = useDispatch();

  // const [airQuality, setAirQuality] = useAirQuality(name);
  const subwayState = useSelector((state: RootState) => state.subwayStation);

  useEffect(() => {
    setMaxPage(airQuality?.length);
  }, [airQuality]);

  useEffect(() => {
    setCurrentAir(airQuality?.[curPage]);
  }, [curPage, airQuality]);

  const onMainScreenWheelHandle = (e: WheelEvent<HTMLDivElement>) => {
    if (curPage === 0) {
      return e.deltaY > 0
        ? setCurPage((value) => value + 1)
        : setCurPage((value) => value);
    }
    if (curPage + 1 === maxPage) {
      return e.deltaY > 0
        ? setCurPage((value) => value)
        : setCurPage((value) => value - 1);
    }
    return e.deltaY > 0
      ? setCurPage((value) => value + 1)
      : setCurPage((value) => value - 1);
  };

  const onMainScreenClickHandle = (e: MouseEvent<HTMLDivElement>) => {
    const middlehalf = window.innerHeight / 2;

    if (curPage === 0) {
      return e.clientY > middlehalf
        ? setCurPage((value) => value + 1)
        : setCurPage((value) => value);
    }
    if (curPage + 1 > maxPage) {
      return e.clientY > middlehalf
        ? setCurPage((value) => value)
        : setCurPage((value) => value - 1);
    }
    return e.clientY > middlehalf
      ? setCurPage((value) => value + 1)
      : setCurPage((value) => value - 1);
  };

  return (
    <div
      className="flex max-h-full max-w-[80%] w-full p-4 m-4 relative overflow-hidden"
      onClick={onMainScreenClickHandle}
      onWheel={onMainScreenWheelHandle}
    >
      <ProgressCard
        name={'pm10'}
        value={
          currentAir?.pm10 !== undefined ? parseInt(currentAir?.pm10, 10) : 0
        }
        index={0}
        progress={
          currentAir?.pm10 !== undefined ? parseInt(currentAir?.pm10, 10) : 0
        }
      />
      <div className="absolute flex right-4 top-6">
        <CommonToggle name="미세먼지 농도" value={true} />
        <CommonToggle name="총휘발성유기화합물" value={true} />
        <CommonToggle name="온도" value={true} />
      </div>
      <div className="absolute z-20 flex bottom-0 left-2 m-2 items-end max-h-[15.5625em] max-w-[23.3125em] shrink-0 flex-wrap overflow-scroll scrollbar-hide">
        {selctAtomic.map((atomic, atomicCardIdx) => {
          return (
            <AtomicCard
              atomicSymbol={atomic}
              value={
                currentAir?.[atomic] !== undefined &&
                currentAir?.[atomic] !== ''
                  ? parseInt(currentAir[atomic], 10)
                  : 0
              }
              index={atomicCardIdx}
              key={atomicCardIdx}
            ></AtomicCard>
          );
        })}
      </div>
      <Thermometer
        value={
          currentAir?.temperature !== undefined &&
          currentAir?.temperature !== ''
            ? parseInt(currentAir.temperature, 10)
            : 0
        }
      />

      <div className="absolute bottom-0 right-0">
        <p>{subwayState.stationName}</p>
        <p>{currentAir?.place}</p>
      </div>
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
        </CanvasContainer>
      </div>
    </div>
  );
};

export { MainScreen };
