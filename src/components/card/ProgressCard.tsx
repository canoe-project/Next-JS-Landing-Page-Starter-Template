// import {} from 'react';
import ProgressBarPI from 'components/progressBar/ProgressBarPI';

type Props = {
  name: string;
  value: number;
  content: string;
  index?: number | undefined;
  unit?: string | undefined;
  progress: number;
};

const progressColor = ['#BBD0FF', '#B8C0FF', '#FFD6FF', '#E7C6FF', '#C8B6FF'];

const ProgressCard = ({ name, value, content, unit, progress }: Props) => {
  return (
    <div className="z-10 flex flex-col p-4 bg-white rounded w-[13.5625em] shadow-md m-4 hover:scale-110 hover: duration-300 h-max">
      {/* title */}
      <p className="m-2 text-2xl text-logo font-NanumSquareRound max-w-[9.25em] flex flex-wrap">{`${name}`}</p>
      {/* content */}
      <p className={`m-2 text-xs font-NanumSquareRound text-logo`}>{content}</p>

      <ProgressBarPI
        className="self-end mt-6"
        label={`${value} ${unit !== undefined ? unit : ''}`}
        labelColor="text-selectedFont"
        size={135}
        progress={progress}
        indicatorColor={`${progressColor[Math.round(progress / 20) - 1]}`}
      />
    </div>
  );
};

export { ProgressCard };
