import { render } from '@testing-library/react';
import { SpriteAnimator } from 'components';
import newton_sprite from 'img/newton_welcome_sprite.png';

describe(SpriteAnimator, () => {
  it('Component Init correctly', () => {
    render(<SpriteAnimator image={newton_sprite} speed={5} />);
  });
});
