import { Button, LinkRouter } from 'components';
import Transition from 'components/transition/Transition';
import { useNavigate } from 'react-router-dom';

const MainMenuPage = () => {
  let navigate = useNavigate();

  return (
    <Transition>
      <div className='center-container'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <Button label='BIOGRAFÍA' onClick={() => navigate('/biography')} />
          </div>
          <div className='col-12 mb-5'>
            <Button label='LEYES DE NEWTON' onClick={() => navigate('/laws')} />
          </div>
          <div className='col-12 mb-5'>
            <Button label='EJERCICIOS' onClick={() => navigate('/main')} />
          </div>
        </div>
        <LinkRouter to='/'>Volver al Inicio</LinkRouter>
      </div>
    </Transition>
  );
};

export default MainMenuPage;
