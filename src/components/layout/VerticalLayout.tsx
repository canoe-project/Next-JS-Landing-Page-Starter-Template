import { ReactNode } from 'react';

import { SubwayStationSideNavbar } from 'components/navigation/SubwayStationSideNavbar';

type ISectionProps = {
  // title?: string;
  // description?: string;
  // yPadding?: string;
  children: ReactNode;
};

const VerticalLayout = ({ children }: ISectionProps) => (
  <div className={`max-w-screen-[120em] flex row max-h-screen`}>
    <SubwayStationSideNavbar />
    {children}
  </div>
);

export { VerticalLayout };
