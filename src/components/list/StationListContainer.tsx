import { useState, useEffect } from 'react';

import { StationList } from 'components/list/StationList';

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

  useEffect(() => {
    setStationGroup(group);
  }, [group]);

  return (
    <div className="p-2 my-4 overflow-scroll text-selectedFontont scrollbar-hide">
      {stationGroup.map((stationList, listNumber) => {
        return (
          <div key={`${listNumber}-Group`}>
            <div key={`${listNumber}-titleContain`}>
              <StationList line={listNumber} group={stationList} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { StationListContainer };
