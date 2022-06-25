import Transition from 'components/transition/Transition';

const WelcomePage = () => {
  return (
    <Transition>
      <div className='center-container'>
        <h2>Bienvenido a Isacc Newton App</h2>
        <p className='w-75 text-description'>
          Aplicación en la cual te moestraremos algo de la biografía de celebre
          cientifico Isaac Newton y sus 3 famolas leyes del movimiento, espero
          te diviertas y sea de tu agrado.
        </p>
        <button className='btn btn-primary rounded-pill'>CONTINUAR</button>
      </div>
    </Transition>
  );
};

export default WelcomePage;
