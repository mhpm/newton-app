import { Button, LinkRouter } from 'components';
import Transition from 'components/transition/Transition';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainMenuPage = () => {
  let navigate = useNavigate();

  return (
    <Transition>
      <div className='center-container'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <Button
              label='BIOGRAFÍA'
              onClick={() => navigate('/main')}
              className='btn btn-primary rounded-pill'
            />
          </div>
          <div className='col-12 mb-5'>
            <Button
              label='LEYES DE NEWTON'
              onClick={() => navigate('/main')}
              className='btn btn-primary rounded-pill'
            />
          </div>
          <div className='col-12 mb-5'>
            <Button
              label='EJERCICIOS'
              onClick={() => navigate('/main')}
              className='btn btn-primary rounded-pill'
            />
          </div>
        </div>
        <LinkRouter to='/'>Volver al Inicio</LinkRouter>
      </div>
    </Transition>
  );
};

export default MainMenuPage;
