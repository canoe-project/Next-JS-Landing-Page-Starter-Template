type Props = {
  value?: number;
};
const Thermometer = ({ value = 95 }: Props) => {
  return (
    <div
      className={`absolute z-10 h-[30em] min-h-[30em] w-8 bg-gradient-to-t from-blue to-lightPurple  rounded-full right-4 top-1/2 -translate-y-1/2`}
    >
      <svg className="h-full w-[300%] filter drop-shadow-lg -translate-x-full">
        {/* 0~95 */}
        <g
          className=" translate-y-[0%]  "
          style={{ transform: `translate(70%,${100 - value}%)` }}
        >
          <polygon
            className=" fill-white"
            points="25.9,12 13.9,16.5 1.9,21 1.9,12 1.9,3 13.9,7.5"
          ></polygon>
          <text
            x="-2.5em"
            fontSize={'1em'}
            alignmentBaseline="text-before-edge"
            fontFamily="NanumSquare"
          >
            {`${value}`}°C
          </text>
        </g>
      </svg>
    </div>
  );
};

export { Thermometer };
