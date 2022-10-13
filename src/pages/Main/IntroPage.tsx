import { useNavigate } from 'react-router-dom';
import { SpriteAnimator, Button, Link } from 'components';
import newtonSprite from 'img/newton_welcome_sprite.png';
import Transition from 'components/transition/Transition';
import styled from 'styled-components';
import { variantsButton } from 'components/button/Button';

const CopyRight = styled.div`
  position: fixed;
  bottom: 20px;
  font-size: 16px;
  color: #7c7c7c;
`;

const IntroPage = () => {
  let navigate = useNavigate();

  return (
    <Transition>
      <div className='center-container'>
        <SpriteAnimator image={newtonSprite} speed={4} />
        <h1>Isaac Newton App</h1>
        <br />
        <Button
          variant={variantsButton.primary}
          label='CONTINUAR'
          onClick={() => navigate('/welcome')}
        />
        <CopyRight>
          Developed by{' '}
          <Link
            rel='noreferrer'
            href='https://www.linkedin.com/in/mhpm/'
            target='_blank'>
            Michelle Perez Morales
          </Link>{' '}
          ⓒ <i>Copyright</i> 2022
        </CopyRight>
      </div>
    </Transition>
  );
};

export default IntroPage;
