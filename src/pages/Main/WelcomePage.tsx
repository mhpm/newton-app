import { Button } from 'components';
import Transition from 'components/transition/Transition';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  let navigate = useNavigate();

  return (
    <Transition>
      <div className='center-container'>
        <h2>Bienvenido a Isaac Newton App</h2>
        <p className='w-75 text-description'>
          Aplicación en la cual te mostraremos algo de la biografía del celebre
          científico Isaac Newton y sus 3 famolas leyes del movimiento, espero
          te diviertas y sea de tu agrado.
        </p>
        <br />
        <Button label='CONTINUAR' onClick={() => navigate('/main')} />
      </div>
    </Transition>
  );
};

export default WelcomePage;
