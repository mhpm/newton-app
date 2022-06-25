import { useNavigate } from 'react-router-dom';
import { SpriteAnimator } from 'components/sprite-animator/SpriteAnimator';
import newtonSprite from 'img/newton_welcome_sprite.png';
import Transition from 'components/transition/Transition';
import styled from 'styled-components';

const CopyRigh = styled.div`
  position: fixed;
  bottom: 20px;
  font-size: 14px;
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
        <button
          onClick={() => navigate('/welcome')}
          className='btn btn-primary rounded-pill'>
          CONTINUAR
        </button>
        <CopyRigh>
          Developed by{' '}
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/mhpm/'
            target='_blank'>
            Michelle Perez Morales
          </a>{' '}
          ⓒ <i>Copyright</i> 2022
        </CopyRigh>
      </div>
    </Transition>
  );
};

export default IntroPage;
