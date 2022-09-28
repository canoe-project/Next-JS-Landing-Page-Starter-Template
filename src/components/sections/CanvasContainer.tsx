import React, {
  Children,
  ReactNode,
  useState,
  useEffect,
  cloneElement,
  useReducer,
  WheelEvent,
  MouseEvent,
} from 'react';

interface Props {
  children: ReactNode;
}

interface Reducer {
  prevCanvas: number;
  currCanvas: number;
  nextCanvas: number;
}

const reducer = (prevState: Reducer, action: { index: number }): Reducer => {
  return {
    prevCanvas: action.index - 1,
    currCanvas: action.index,
    nextCanvas: action.index + 1,
  };
};

const CanvasContainer = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [arrayChildren, setArrayChildren] = useState(
    Children.toArray(children)
  );

  const [canvasReduce, setCanvasReduce] = useReducer<
    (prevState: Reducer, action: { index: number }) => Reducer
  >(reducer, {
    prevCanvas: -1,
    currCanvas: 0,
    nextCanvas: 1,
  });

  useEffect(() => {
    setCanvasReduce({
      index: currentIndex,
    });
  }, [currentIndex, lastIndex]);

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
      {canvasReduce.prevCanvas > 0 &&
        cloneElement(arrayChildren[canvasReduce.prevCanvas], {
          ...arrayChildren[canvasReduce.prevCanvas],
          className: '-top-1/2',
        })}
      {arrayChildren[canvasReduce.currCanvas] !== undefined &&
        cloneElement(arrayChildren[canvasReduce.currCanvas], {
          ...arrayChildren[canvasReduce.currCanvas],
          className: '',
          hidden: false,
        })}
      {canvasReduce.nextCanvas < lastIndex &&
        cloneElement(arrayChildren[canvasReduce.nextCanvas], {
          ...arrayChildren[canvasReduce.nextCanvas],
          className: 'top-1/2',
        })}
    </div>
  );
};

export { CanvasContainer };
