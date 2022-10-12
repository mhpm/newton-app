import { useEffect, useState } from 'react';
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from 'react-draggable';
import styled from 'styled-components';
import StepBox from './components/StepBox';

interface ILine {
  id: any;
  top: number;
  left: number;
  height: number;
  angle: number;
}

const Line = styled.div<ILine>`
  position: absolute;
  width: 2px;
  background-color: tomato;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  height: ${(props) => props.height}px;

  transform: ${(props) => `rotate(${props.angle}deg)`};
`;

const lineList: ILine[] = [];

interface ISteBox {
  id: number;
  name: string;
  defaultPosition: { x: number; y: number };
  position: { x: number; y: number };
  backStep: any;
  nextStep: any;
}

const StepsList: ISteBox[] = [
  {
    id: 1,
    name: 'Step 1',
    defaultPosition: { x: 200, y: 0 },
    position: { x: 200, y: 0 },
    backStep: [],
    nextStep: [],
  },
  {
    id: 2,
    name: 'Step 2',
    defaultPosition: { x: 800, y: 300 },
    position: { x: 800, y: 300 },
    backStep: [],
    nextStep: [],
  },
  {
    id: 3,
    name: 'Step 3',
    defaultPosition: { x: 600, y: 600 },
    position: { x: 600, y: 600 },
    backStep: [],
    nextStep: [],
  },
];

const DiagramsPage = () => {
  const [steps, setSteps] = useState<ISteBox[]>(StepsList);
  const [connector, setConnector] = useState<any>({});
  const [lines, setLines] = useState<ILine[]>(lineList);
  const [isRightActive, setIsRightActive] = useState<boolean>(false);
  const [isLeftActive, setIsLeftActive] = useState<boolean>(false);
  const [isConecting, setIsConecting] = useState<boolean>(false);

  useEffect(() => getLine(), [connector]);

  const getLine = () => {
    if (Object.keys(connector).length > 2) {
      const positions: any[] = [];

      Object.keys(connector).forEach((key) => {
        positions.push(connector[key]);
      });

      console.log(positions);

      adjustLine(
        positions[0].position,
        positions[1].position,
        positions[2].connection
      );
    }
  };

  function adjustLine(
    from: any,
    to: any,
    connection: { from: string; to: string }
  ) {
    console.log(from, to);

    var fT = from.y + 92;
    var tT = to.y + 90;
    var fL = from.x + 220;
    var tL = to.x + 20;

    var CA = Math.abs(tT - fT);

    var CO = Math.abs(tL - fL);
    var H = Math.sqrt(CA * CA + CO * CO);
    var ANG = (180 / Math.PI) * Math.acos(CA / H);

    if (tT > fT) {
      var top = (tT - fT) / 2 + fT;
    } else {
      var top = (fT - tT) / 2 + tT;
    }
    if (tL > fL) {
      var left = (tL - fL) / 2 + fL;
    } else {
      var left = (fL - tL) / 2 + tL;
    }

    if (
      (fT < tT && fL < tL) ||
      (tT < fT && tL < fL) ||
      (fT > tT && fL > tL) ||
      (tT > fT && tL > fL)
    ) {
      ANG *= -1;
    }
    top -= H / 2;

    const line = {
      id: (Math.random() * 1000).toFixed(0),
      top: Number(top),
      left: Number(left),
      height: H,
      angle: ANG,
    };

    setLines([...lines, line]);

    setConnector({});
  }

  const handleDrag = (
    event: DraggableEvent,
    data: DraggableData,
    step: ISteBox
  ) => {
    const { x, y } = data;

    const newArr = steps.map((item) =>
      item.id === step.id ? { ...item, position: { x, y } } : item
    );
    setSteps(newArr);

    if (step.backStep.lenght || step.nextStep.lenght) {
      console.log(step);
    }

    // setConnector((prev: any) => ({ ...prev, [step.name]: box }));
  };

  const updateConnector = (
    step: ISteBox,
    connection: { from: string; to: string }
  ) => {
    // const tempStep = steps.find((item) => item.id === step.id);
    setConnector((prev: any) => ({
      ...prev,
      [step.id]: step,
      connection,
    }));
  };

  const updateStepList = (
    step: ISteBox,
    position: { x: number; y: number }
  ) => {
    console.log(position);

    const newArr = steps.map((item) =>
      item.id === step.id ? { ...item, position } : item
    );
    setSteps(newArr);
  };

  const handleStart = (
    event: DraggableEvent,
    data: DraggableData,
    step: any
  ) => {
    const btn = event.target instanceof Element ? event.target.id : '';
    const { x, y } = data;
    updateStepList(step, { x, y });

    if (btn === 'btnRight') {
      updateConnector(step, { ...connector.connection, from: 'right' });
    } else if (btn === 'btnLeft') {
      updateConnector(step, { ...connector.connection, from: 'left' });
    }

    // if (btn) {
    //   if (btn === 'btnRight' && isRightActive) {
    //     setIsRightActive(false);
    //     setConnector({});
    //   } else if (btn === 'btnRight') {
    //     setIsRightActive(true);
    //     updateStepList(step, { x, y });
    //     updateConnector(step);
    //   } else if (btn === 'btnLeft' && isRightActive) {
    //     console.log('Connection completed');
    //     setIsRightActive(!isRightActive);
    //     updateStepList(step, { x, y });
    //     updateConnector(step);
    //   } else if (btn === 'btnLeft' && !isRightActive) {
    //     console.log('no hagas nada');
    //   }
    // }
  };

  const handleRightConnector = (step: any) => {};

  const handleLeftConnector = (step: any) => {};

  return (
    <div className='diagram p-0 m-0'>
      <button onClick={getLine}>GET LINE</button>
      {steps.map((step) => (
        <StepBox
          key={step.id}
          id={step.id}
          name={`x:${step.position.x} y:${step.position.y}`}
          defaultPosition={step.defaultPosition}
          onDrag={(e, data) => handleDrag(e, data, step)}
          onStart={(e, data) => handleStart(e, data, step)}
          onLeftClick={() => handleLeftConnector(step)}
          onRightClick={() => handleRightConnector(step)}
        />
      ))}
      {lines.map((line) => (
        <Line key={line.id} {...line} />
      ))}
    </div>
  );
};

export default DiagramsPage;
