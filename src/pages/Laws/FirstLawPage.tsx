import { LinkRouter } from 'components';

const FirstLawPage = () => {
  return (
    <div className='center-container py-5'>
      <h1>Primera ley de Newton o ley de la inercia</h1>
      <div className='row my-5 w-100'>
        <div className='col-12 mb-5'>
          <iframe
            height='463'
            className='col-12 col-lg-7'
            src='https://www.youtube.com/embed/BwpvOr7OyrU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
        </div>
      </div>
      <div className='d-block justify-content-center col-12 col-lg-7'>
        <p>
          Esta ley no se le ocurrió de la nada a Newton. En sus investigaciones,
          tomó los hallazgos de otro científico llamado Galileo Galilei, quien
          ya había realizado algunos experimentos para estudiar el movimiento en
          los objetos, y los combinó con sus ideas. Así describió la primera ley
          en su libro Principios matemáticos de la filosofía natural:
        </p>
        <p className='fst-italic text-muted'>
          "Todo cuerpo permanecerá en reposo o movimiéndose a velocidad
          constante en linea recta, a menos que una fuerza externa le haga
          cambiar de estado."
        </p>
        <br />
        <p>
          Eso quiere decir que, cualquier objeto que está quieto o en movimiento
          se va mantener igual, a menos que aparezca otro objeto o fuerza que lo
          mueva o lo haga cambiar de posición. Además, si se encuentra en
          movimiento siempre lo hará en línea recta, no en círculos, ni en
          zigzag.
        </p>
        <img
          className='w-100'
          loading='lazy'
          src='https://media.gcflearnfree.org/content/5dbae779af9cd40d985970b2_10_31_2019/Ley-de-la-inercia-de-Newton.png'
          alt='Movimiento rectilíneo en la primera ley de Newton'
          title='Movimiento rectilíneo en la primera ley de Newton'></img>
        <h4 className='text-start mt-4'>Mira este Ejemplo:</h4>
        <img
          className='w-100'
          loading='lazy'
          src='https://media.gcflearnfree.org/content/5dbae779af9cd40d985970b2_10_31_2019/Cómo-funciona-la-inercia.png'
          alt='Ejemplo de la primera ley de Newton o ley de la inercia'
          title='Ejemplo de la primera ley de Newton o ley de la inercia'></img>
        <p className='mt-4'>
          El estado natural del suelo es permanecer quieto y el del balón igual.
          Él no se va a mover a menos que alguien lo patee o lo levante. Si
          alguien lo patea, aplica una fuerza que cambia su estado: pasa de
          estar quieto a estar en movimiento. Según lo que decía Newton, lo
          ideal es que el balón continúe rodando sin parar y en línea recta,
          pero en algún momento se detiene. Esto pasa porque el empujón con el
          pie no es la única fuerza que está actuando. También hay otras
          fuerzas:
        </p>
        <p className='mt-4'>
          <strong>La fricción:</strong> aparece cuando hay dos objetos que están
          en contacto, es decir, se alcanzan a tocar mientras se mueven en
          sentidos opuestos.
        </p>
        <img
          className='w-100'
          loading='lazy'
          src='https://media.gcflearnfree.org/content/5dbae779af9cd40d985970b2_10_31_2019/Qué-es-la-fricción.png'
          alt='Qué es la fricción'
          title='Qué es la fricción'></img>
      </div>
      <div>
        <LinkRouter to='/laws'>Volver</LinkRouter>
      </div>
    </div>
  );
};

export default FirstLawPage;
