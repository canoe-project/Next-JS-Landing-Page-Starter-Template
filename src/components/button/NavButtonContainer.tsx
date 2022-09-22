// import {} from 'react';

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};
const NavButtonContainer = ({ children }: Props) => {
  return <div className=" bg-[#F7F6F9] flex rounded p-2">{children}</div>;
};

export { NavButtonContainer };
