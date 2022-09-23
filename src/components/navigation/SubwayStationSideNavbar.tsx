import { useEffect, useState } from 'react';

import { NavButton } from 'components/button/NavButton';
import { NavButtonContainer } from 'components/button/NavButtonContainer';
import { Logo } from 'components/paragraph/Logo';
import { Symbol } from 'components/paragraph/Symbol';
import stationGroupJSON from 'data/stationGroup.json';

type StationType = {
  stationName: string;
  stationNumber: number;
};

const SubwayStationSideNavbar = () => {
  const [stationGroup, setStationGroup] = useState<StationType[][]>([[]]);
  useEffect(() => {
    setStationGroup(stationGroupJSON);
  }, []);

  return (
    <nav className="flex max-w-[24.75em] w-[20%] border-r border-r-[#F3F3F3] p-10 max-h-screen flex-col">
      <div className="flex flex-row flex-shrink-0 p-2">
        <Symbol />
        <Logo />
      </div>
      <div className="flex flex-row flex-shrink-0 p-2 ">
        <NavButtonContainer>
          <NavButton icon="list" defaultForce={true} />
          <NavButton icon="map" />
        </NavButtonContainer>
      </div>

      <div className="p-2 overflow-scroll text-selectedFontont scrollbar-hide">
        {stationGroup.map((stationList, listNumber) => {
          return (
            <div key={`${listNumber}-Group`}>
              <div
                key={`${listNumber}-titleContain`}
                className={`flex flex-row`}
              >
                <p
                  className={`text-2xl font-DoHyeon `}
                  key={`${listNumber}-title`}
                >
                  {`${listNumber + 1} 호선`}
                </p>
                <span className="self-center material-symbols-outlined">
                  expand_more
                </span>
              </div>
              <ul>
                {stationList.map((station) => {
                  return (
                    <li key={station.stationNumber}>
                      {`${station.stationName}`}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export { SubwayStationSideNavbar };
