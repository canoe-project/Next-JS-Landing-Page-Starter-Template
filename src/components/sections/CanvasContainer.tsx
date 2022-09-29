import React, {
  Children,
  useState,
  useEffect,
  cloneElement,
  WheelEvent,
  MouseEvent,
  ReactNode,
  ReactElement,
  isValidElement,
} from 'react';

interface CanvasType {
  wheel?: boolean;
  onClick?: Function;
  hidden?: boolean;
  children?: ReactNode;
  className: string;
}

interface Props {
  children: ReactNode | ReactNode[];
}

const CanvasContainer = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const arrayChildren = Children.toArray(children);

  useEffect(() => {
    setLastIndex(arrayChildren.length);
  }, [arrayChildren]);

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (currentIndex - 1 < 0) {
      return e.deltaY > 0
        ? setCurrentIndex((value) => value + 1)
        : setCurrentIndex((value) => value);
    }
    if (currentIndex + 2 > lastIndex) {
      return e.deltaY > 0
        ? setCurrentIndex((value) => value)
        : setCurrentIndex((value) => value - 1);
    }
    return e.deltaY > 0
      ? setCurrentIndex((value) => value + 1)
      : setCurrentIndex((value) => value - 1);
  };
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const middlehalf = window.innerHeight / 2;

    if (currentIndex - 1 < 0) {
      return e.clientY > middlehalf
        ? setCurrentIndex((value) => value + 1)
        : setCurrentIndex((value) => value);
    }
    if (currentIndex + 2 > lastIndex) {
      return e.clientY > middlehalf
        ? setCurrentIndex((value) => value)
        : setCurrentIndex((value) => value - 1);
    }
    return e.clientY > middlehalf
      ? setCurrentIndex((value) => value + 1)
      : setCurrentIndex((value) => value - 1);
  };

  return (
    <div
      onWheel={onWheel}
      onClick={onClick}
      className={`flex flex-col flex-1 h-full w-full`}
    >
      {currentIndex > 0 &&
        isValidElement(arrayChildren[currentIndex - 1]) &&
        cloneElement(
          arrayChildren[currentIndex - 1] as ReactElement<CanvasType>,
          {
            ...(arrayChildren[currentIndex - 1] as ReactElement<CanvasType>),
            className: '-top-1/2',
          }
        )}
      {arrayChildren[currentIndex] !== undefined &&
        isValidElement(arrayChildren[currentIndex]) &&
        cloneElement(arrayChildren[currentIndex] as ReactElement<CanvasType>, {
          ...(arrayChildren[currentIndex] as ReactElement<CanvasType>),
          className: '',
          hidden: false,
        })}
      {currentIndex + 1 < lastIndex &&
        isValidElement(arrayChildren[currentIndex + 1]) &&
        cloneElement(
          arrayChildren[currentIndex + 1] as ReactElement<CanvasType>,
          {
            ...(arrayChildren[currentIndex + 1] as ReactElement<CanvasType>),
            className: 'top-1/2',
          }
        )}
    </div>
  );
};

export { CanvasContainer };
