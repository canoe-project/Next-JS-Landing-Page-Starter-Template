import { useState, useEffect } from 'react';

type Props = {
  name: string;
  value: boolean;
};
const CommonToggle = ({ name, value }: Props) => {
  const [onToggle, setOnToggle] = useState<boolean>(true);

  useEffect(() => {
    setOnToggle(value);
  }, [value]);

  return (
    <div className="z-10 flex flex-row">
      <p className="self-center mx-2 text-xs font-NanumSquareRound text-logo">
        {name}
      </p>
      <div
        className={`flex flex-row p-[2PX] ${
          onToggle ? 'bg-darkBlue' : 'bg-toggle'
        } rounded-full w-10 h-6 shadow-md ${
          onToggle ? 'justify-end' : 'justify-start'
        }
        transition-all ease-in-out delay-75
        `}
        onClickCapture={() => setOnToggle((proValue) => !proValue)}
      >
        <div className="w-5 h-5 bg-white rounded-full "></div>
      </div>
    </div>
  );
};

export { CommonToggle };
