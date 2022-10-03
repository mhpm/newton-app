import { Banner } from 'components';
import FirstLawImage from 'img/1Law.png';
import SecondLawImage from 'img/2Law.png';
import ThirdLawImage from 'img/3Law.png';

const data = [
  {
    image: FirstLawImage,
    title: 'Primera Ley',
    desc: '“Todo cuerpo permanecerá en reposo o moviéndose a velocidad constante en linea recta, a menos que una fuerza externa le haga cambiar”',
  },
  {
    image: SecondLawImage,
    title: 'Segunda Ley',
    desc: '“La aceleración de un objeto es directamente proporcional a la fuerza que actúa sobre él e inversamente proporcional a la masa”.',
  },
  {
    image: ThirdLawImage,
    title: 'Tercera Ley',
    desc: '“Para cada acción hay una reacción igual y en el sentido opuesto”.',
  },
];

function LawsMenuPage() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {data.map((item) => (
        <Banner className='me-5'>
          <Banner.Image src={item.image} alt='image' />
          <Banner.Title title={item.title} />
          <Banner.Desc desc={item.desc} />
        </Banner>
      ))}
    </div>
  );
}

export default LawsMenuPage;
