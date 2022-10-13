import { Banner, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import FirstLawImage from 'img/1Law.png';
import SecondLawImage from 'img/2Law.png';
import ThirdLawImage from 'img/3Law.png';

const data = [
  {
    id: 1,
    image: FirstLawImage,
    title: 'Primera Ley',
    route: 'first-law',
    desc: '“Todo cuerpo permanecerá en reposo o moviéndose a velocidad constante en linea recta, a menos que una fuerza externa le haga cambiar”',
  },
  {
    id: 2,
    image: SecondLawImage,
    title: 'Segunda Ley',
    route: 'second-law',
    desc: '“La aceleración de un objeto es directamente proporcional a la fuerza que actúa sobre él e inversamente proporcional a la masa”.',
  },
  {
    id: 3,
    image: ThirdLawImage,
    title: 'Tercera Ley',
    route: 'third-law',
    desc: '“Para cada acción hay una reacción igual y en el sentido opuesto”.',
  },
];

type Props = {};

const LawsBannerContainer = (props: Props) => {
  let navigate = useNavigate();

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className='col-md-4 col-sm-4 d-flex justify-content-center'>
          <Banner className='mb-5'>
            <Banner.Image src={item.image} alt='banner-image' />
            <Banner.Title title={item.title} />
            <Banner.Desc desc={item.desc} />
            <Banner.Footer>
              <Button onClick={() => navigate(item.route)} label='Saber Más' />
            </Banner.Footer>
          </Banner>
        </div>
      ))}
    </>
  );
};

export default LawsBannerContainer;
