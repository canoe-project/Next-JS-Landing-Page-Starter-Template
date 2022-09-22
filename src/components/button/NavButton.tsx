type Props = {
  icon: 'map' | 'list';
  defaultForce?: boolean | undefined;
};
const getForce = (force: boolean | undefined) => {
  return force !== undefined
    ? 'bg-white text-[#B8C0FF]'
    : 'bg-none text-[#A0A1AA]';
};

const NavButton = ({ icon, defaultForce }: Props) => {
  return (
    <div
      className={`material-symbols-outlined ${getForce(
        defaultForce
      )} h-10 w-10 flex justify-center items-center rounded`}
    >{`${icon}`}</div>
  );
};

export { NavButton };
