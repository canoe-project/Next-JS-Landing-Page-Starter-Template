import { useState, useEffect, Fragment } from 'react';

type StationType = {
  stationName: string;
  stationNumber: number;
};

type Props = {
  line: number;
  group: StationType[];
};

const StationList = ({ line, group }: Props) => {
  const [stationGroup, setStationGroup] = useState<StationType[]>([]);
  const [selectStation, setSelectStation] = useState(false);
  const [isClick, setClick] = useState(false);
  useEffect(() => {
    setStationGroup(group);
  }, [group]);

  return (
    <Fragment>
      <div
        className={`flex flex-row `}
        onClickCapture={() => {
          setClick((preIsClick) => !preIsClick);
        }}
      >
        <p className={`text-2xl font-DoHyeon mr-1`} key={`${line}-title`}>
          {`${line + 1} 호선`}
        </p>
        <p
          className={`self-center text-base font-NanumGothic font-bold text-subtitle mr-1`}
        >{`${line + 1} line`}</p>
        <span
          className={`text-2xs self-center material-symbols-outlined ${
            isClick ? 'text-darkBlue ' : 'text-unSelectedFont -rotate-90'
          }`}
        >
          expand_more
        </span>
      </div>
      <ul
        className={`max-h-[19.5em] overflow-scroll scrollbar-hide ${
          isClick ? 'h-full' : 'h-0'
        }`}
      >
        {stationGroup.map((station) => {
          return (
            <li
              className={` text-unSelectedFont flex flex-row relative`}
              key={station.stationNumber}
            >
              <div
                className={`z-20 ${
                  selectStation ? 'bg-white' : 'bg-darkBlue'
                } rounded-full w-5 h-5 border-4 border-darkBlue self-center `}
              ></div>
              <div className={`w-1 h-full left-2 bg-darkBlue absolute`}></div>
              <p className={'my-4 '}>{`${station.stationName}`}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export { StationList };
