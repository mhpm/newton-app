import { LinkRouter, Transition } from 'components';
import NewtonImage from 'img/newton.jpg';

const BiographyPage = () => {
  return (
    <Transition>
      <div className='center-container pt-5'>
        <h2>Biografía</h2>
        <div className='container text-description row mt-4'>
          <div className='col-md-4'>
            <img
              src={NewtonImage}
              alt='newton'
              className='img-fluid pt-2 pb-4'
            />
            <LinkRouter to='/main'>Volver al menu</LinkRouter>
          </div>
          <div className='col-md fs-5 pl-4 text-justify'>
            <p>
              Isaac Newton nació el 25 de diciembre de 1642 (según el calendario
              juliano), 4 de enero 1643 (calendario gregoriano), en Woolsthorpe,
              una aldea en el condado de Lincolnshire, Inglaterra.
            </p>
            <p>
              Hijo póstumo, vino al mundo prematuramente tres meses después de
              la muerte de su padre, también llamado Isaac Newton, un próspero
              granjero analfabeto. Su pequeño tamaño y delicado estado hacen
              temer sobre su suerte, aunque finalmente sobrevivió. Su madre
              Hannah Ayscough, se volvió a casar cuando Newton tenía tres años,
              yéndose a vivir con su nuevo marido, el reverendo Bernabé Smith,
              dejando al pequeño Isaac al cuidado de su abuela, Margery
              Ayscough. Su progenitora tuvo tres hijos en este segundo
              matrimonio. Cuando tenía 14 años, su padrastro (al que odiaba)
              murió y Newton regresó a Woolsthorpe.
            </p>
            <p>
              Desde joven apareció como "tranquilo, silencioso y reflexivo"
              aunque lleno de imaginación. Se entretenía construyendo artilugios
              como un molino de viento, un reloj de agua, un carricoche que
              andaba mediante una manivela accionada por el propio conductor,
              etc. Su madre quería que se convirtiera en agricultor, aunque
              Isaac Newton aborrecía la agricultura. Desde los doce años hasta
              que cumplió los diecisiete, cursó estudios en la escuela primaria
              en Grantham. En 1661, ingresó en el Trinity College de la
              Universidad de Cambridge, donde estudió matemáticas bajo la
              dirección del matemático Isaac Barrow.
            </p>
            <p>
              Recibió su título de bachiller en 1665 y le nombraron becario en
              Trinity College en 1667 (entre 1665 y 1667 la Universidad de
              Cambridge se cerró por la peste y Newton regresó a Woolsthorpe).
              Desde 1668 fue profesor. Newton se dedicó al estudio e
              investigación de los últimos avances en matemáticas y a la
              filosofía natural.
            </p>
            <p>
              El famoso incidente de la manzana puede que sea el más famoso de
              su vida. Ocurrió en 1666. Según su biógrafo, William Stukeley,
              Isaac Newton se encontraba bajo la sombra de un manzano en su
              granja cuando del árbol cayó un fruto. Fue entonces se le ocurrió
              la idea de la gravitación. Se preguntó por qué la manzana
              desciende siempre perpendicularmente respecto del suelo. La
              manzana en cuestión le llevó a plantearse la existencia de la
              gravedad, una fuerza universal de atracción de los cuerpos que
              según su modelo podía expresarse como el producto de las masas de
              los dos cuerpos dividido por el cuadrado de la distancia que los
              separa. Esta ley explicaría por qué las órbitas de los planetas
              alrededor del Sol son elípticas, por qué la Luna provoca las
              mareas y por qué los objetos caen al suelo. En 1669 obtuvo la
              cátedra Lucasiana de matemáticas en la Universidad de Cambridge.
            </p>
            <p>
              En 1684 recibió la visita de Edmund Halley, un astrónomo y
              matemático con el que discutió el problema del movimiento orbital.
              Durante los dos años y medio siguientes, estableció la ciencia
              moderna de la dinámica formulando las tres leyes del movimiento.
              Aplicó estas leyes a las leyes de Kepler sobre movimiento orbital
              y dedujo la ley de la gravitación universal. Publicó su teoría en
              Philosophiae Naturalis Principia Mathematica (Principios
              matemáticos de la filosofía natural, 1687), que marcó un punto de
              inflexión en la historia de la ciencia y que se consideró como la
              obra más influyente en la física. Tardó dos años en escribirlo
              siendo la culminación de más de veinte años de pensamiento. Newton
              sentó las bases de nuestra era científica. Sus leyes del
              movimiento y la teoría de la gravedad sustentan gran parte de la
              física moderna y la ingeniería.
            </p>
            <p>
              Tras un brusco empeoramiento de su afección renal, falleció en
              Londres mientras dormía, el 20 de marzo 1727 (calendario juliano),
              31 de marzo de 1727 (calendario gregoriano). Fue enterrado en la
              Abadía de Westminster, siendo el primer científico en recibir este
              honor. Voltaire pudo haber estado presente en su funeral.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default BiographyPage;
