import { useState, useEffect } from 'react';

type StationType = {
  stationName: string;
  stationNumber: number;
};

type Props = {
  group: StationType[][];
};

const StationListContainer = ({ group }: Props) => {
  const [stationGroup, setStationGroup] = useState<StationType[][]>([[]]);
  // const [clickLine, setClickLine] = useState();
  const [isClick, setClick] = useState(false);
  useEffect(() => {
    setStationGroup(group);
  }, [group]);

  return (
    <div className="p-2 my-4 overflow-scroll text-selectedFontont scrollbar-hide">
      {stationGroup.map((stationList, listNumber) => {
        return (
          <div key={`${listNumber}-Group`}>
            <div
              key={`${listNumber}-titleContain`}
              onClickCapture={() => {
                setClick((preIsClick) => !preIsClick);
              }}
            >
              <div
                key={`${listNumber}-title_name_Contain`}
                className={`flex flex-row`}
              >
                <p
                  className={`text-2xl font-DoHyeon mr-1`}
                  key={`${listNumber}-title`}
                >
                  {`${listNumber + 1} 호선`}
                </p>
                <p
                  className={`self-center text-base font-NanumGothic font-bold text-subtitle mr-1`}
                  key={`${listNumber}-en-title`}
                >{`${listNumber + 1} line`}</p>
                <span className="self-center material-symbols-outlined">
                  expand_more
                </span>
              </div>
              <ul
                className={`max-h-[19.5em] overflow-scroll scrollbar-hide ${
                  isClick ? 'h-full' : 'h-0'
                }`}
                key={`${listNumber}-ul`}
              >
                {stationList.map((station) => {
                  return (
                    <li
                      className={`my-4 text-unSelectedFont`}
                      key={station.stationNumber}
                    >
                      {`${station.stationName}`}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { StationListContainer };
