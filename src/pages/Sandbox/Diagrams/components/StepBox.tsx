import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
  DraggableProps,
} from 'react-draggable';
import { Container, Box, DotLeft, DotRight } from './StepBox.styles';

interface IStepBoxProps {
  id: number;
  name: string;
  defaultPosition: { x: number; y: number };
  disable?: boolean;
  position?: { x: number; y: number };
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onDrag?: (event: DraggableEvent, data: DraggableData) => void;
  onStart?: (event: DraggableEvent, data: DraggableData) => void;
  onMouseDown?: (e: MouseEvent) => void;
}

const StepBox = ({
  name,
  defaultPosition,
  position,
  disable,
  onLeftClick,
  onRightClick,
  onStart,
  onDrag,
  onMouseDown,
}: IStepBoxProps) => {
  return (
    <Draggable
      axis='both'
      defaultPosition={defaultPosition}
      position={position}
      disabled={disable}
      onStart={onStart}
      onDrag={onDrag}
      onMouseDown={onMouseDown}
      bounds='body'
      grid={[1, 1]}>
      <Container>
        <DotLeft id='btnLeft' onClick={onLeftClick} />
        <Box>{name}</Box>
        <DotRight id='btnRight' onClick={onRightClick} />
      </Container>
    </Draggable>
  );
};

export default StepBox;
