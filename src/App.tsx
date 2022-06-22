import './App.css';
import { SpriteAnimator } from './components/sprite-animator/SpriteAnimator';
import newtonSprite from './img/newton_welcome_sprite.png'

function App() {
  return (
    <div className="App">
      <div className="center-container">
        <SpriteAnimator image={newtonSprite} speed={4} />
        <h1>Isaac Newton App</h1>
        <button className='btn btn-primary rounded-pill'>CONTINUAR</button>
      </div>
    </div>
  );
}

export default App;
