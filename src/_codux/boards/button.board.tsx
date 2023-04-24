import { createBoard } from '@wixc3/react-board';
import Button from '../../components/Button';

export default createBoard({
  name: 'Button',
  Board: () => <Button block>Get your quote</Button>,
  environmentProps: {
    canvasWidth: 388,
  },
});
