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
  // <div
  //   className={`max-w-screen-lg mx-auto px-3 ${
  //     props.yPadding ? props.yPadding : 'py-16'
  //   }`}
  // >
  //   {(props.title || props.description) && (
  //     <div className="mb-12 text-center">
  //       {props.title && (
  //         <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
  //       )}
  //       {props.description && (
  //         <div className="mt-4 text-xl md:px-20">{props.description}</div>
  //       )}
  //     </div>
  //   )}

  //   {props.children}
  // </div>
);

export { VerticalLayout };
