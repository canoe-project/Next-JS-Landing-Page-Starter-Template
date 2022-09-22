type Props = {
  name: string;
  value: boolean;
};
const CommonToggle = ({ name, value }: Props) => {
  return (
    <div className="">
      <div className="flex-col p-2 bg-toggle rounded-full w-[5.75em] h-[5.75em] shadow-md">
        <div className="w-5 h-5 bg-white rounded-full">
          {name}
          {value}
        </div>
      </div>
    </div>
  );
};

export { CommonToggle };
