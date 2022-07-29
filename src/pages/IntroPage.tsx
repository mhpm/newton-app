import { useNavigate } from 'react-router-dom';
import { SpriteAnimator, Button, Link } from 'components';
import newtonSprite from 'img/newton_welcome_sprite.png';
import Transition from 'components/transition/Transition';
import styled from 'styled-components';

const CopyRight = styled.div`
  position: fixed;
  bottom: 20px;
  font-size: 16px;
  color: #7c7c7c;
`;

const IntroPage = () => {
  let navigate = useNavigate();

  // gap between binaries
  const binaryGap = (num: number) => {
    let binary: string = (num % 2).toString();
    let rem: number = num;

    while (rem > 1) {
      rem = Math.trunc(rem / 2);
      binary = (rem % 2) + binary;
    }
    let arrayBinary: string[] = binary.split('1').filter(Boolean);
    let result: number = 0;

    if (arrayBinary.length > 1)
      result = Math.max(...arrayBinary.map((item) => item.length));

    console.log(binary);
    console.log(result);
  };

  const letters = (S: string) => {
    let result: Boolean = false;

    if (S.length > 1) {
      if (S[0] === 'a') {
        result = S.split('b').filter(Boolean).length > 1 ? false : true;
      } else {
        result = !S.split('a').filter(Boolean).length;
      }
    } else if (S[0] === 'b') {
      result = true;
    }

    console.log(result);
  };

  const userList = () => {
    const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(USERS_URL)
      .then((response: any) => response.json())
      .then((data: any) => console.log(data));
  };

  return (
    <Transition>
      <div className='center-container'>
        <SpriteAnimator image={newtonSprite} speed={4} />
        <h1>Isaac Newton App</h1>
        <br />
        <Button
          label='CONTINUAR'
          onClick={() => navigate('/welcome')}
          className='btn btn-primary rounded-pill'
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
