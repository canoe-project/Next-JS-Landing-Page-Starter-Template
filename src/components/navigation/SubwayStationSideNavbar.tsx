import { useEffect, useState } from 'react';

import { NavButton } from 'components/button/NavButton';
import { NavButtonContainer } from 'components/button/NavButtonContainer';
import { Logo } from 'components/paragraph/Logo';
import { Symbol } from 'components/paragraph/Symbol';
import stationListJSON from 'data/stationList.json';

type StationType = {
  stationName: string;
  stationNumber: number;
};

const SubwayStationSideNavbar = () => {
  const [stationList, setStationList] = useState<StationType[]>([]);

  useEffect(() => {
    setStationList(stationListJSON);
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
      <ul className="p-2 overflow-scroll ">
        {stationList.map((station, idx) => {
          return (
            <>
              <li key={idx}>
                {`${station.stationName} ${station.stationNumber}`}
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export { SubwayStationSideNavbar };
