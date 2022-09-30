import { useEffect, useState } from 'react';

import { NavButton } from 'components/button/NavButton';
import { NavButtonContainer } from 'components/button/NavButtonContainer';
import { StationListContainer } from 'components/list/StationListContainer';
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
    <nav className="flex max-w-[24.75em] w-[25%] border-r border-r-[#F3F3F3] p-10 min-h-screen flex-col">
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
      <StationListContainer group={stationGroup} />
    </nav>
  );
};

export { SubwayStationSideNavbar };
