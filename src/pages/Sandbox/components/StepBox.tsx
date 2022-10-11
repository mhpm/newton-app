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
  defaultPosition: any;
  disable?: boolean;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onDrag?: (event: DraggableEvent, data: DraggableData) => void;
  onStart?: (event: DraggableEvent, data: DraggableData) => void;
  onMouseDown?: (e: MouseEvent) => void;
}

const StepBox = ({
  name,
  defaultPosition,
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
