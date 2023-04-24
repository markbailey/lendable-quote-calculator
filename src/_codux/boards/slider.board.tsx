import { createBoard } from '@wixc3/react-board';
import Slider from '../../components/Slider';

export default createBoard({
  name: 'Slider',
  Board: () => (
    <Slider
      value={12}
      min={12}
      max={60}
      step={6}
      onChange={(value) => console.log(value)}
      notches
    />
  ),
  environmentProps: {
    canvasWidth: 232,
  },
});
