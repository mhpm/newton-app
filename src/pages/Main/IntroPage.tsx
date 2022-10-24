import { useNavigate } from 'react-router-dom';
import { SpriteAnimator, Button, Link } from 'components';
import newtonSprite from 'img/newton_welcome_sprite.png';
import Transition from 'components/transition/Transition';
import styled from 'styled-components';
import { variantButton } from 'components/button/Button.model';

const CopyRight = styled.div`
  position: fixed;
  bottom: 20px;
  font-size: 16px;
  color: #7c7c7c;
`;

const IntroPage = () => {
  let navigate = useNavigate();

  // const { error, isLoading, data } = useFetch(
  //   'https://reqres.in/api/users?delay=3'
  // );

  return (
    <Transition>
      <div className='center-container'>
        <SpriteAnimator image={newtonSprite} speed={4} />
        <h1>Isaac Newton App</h1>
        <br />
        <Button
          label='INICIAR'
          variant={variantButton.primary}
          onClick={() => navigate('/welcome')}
        />
        <CopyRight>
          Developed by{' '}
          <Link
            rel='noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/mhpm/'>
            Michelle Perez Morales
          </Link>{' '}
          ⓒ <i>Copyright</i> 2022
        </CopyRight>
      </div>
    </Transition>
  );
};

export default IntroPage;
