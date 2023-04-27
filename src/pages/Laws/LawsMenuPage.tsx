import { LinkRouter } from 'components';
import { LawsBannerContainer } from 'containers';

function LawsMenuPage() {
  return (
    <div className='center-container py-5'>
      <h1>LEYES DE NEWTON</h1>
      <div className='row my-5 w-100'>
        <div className='col-12'>
          <iframe
            height='463'
            className='col-12 col-lg-7'
            src='https://www.youtube.com/embed/u-sqXd8Z6IE'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
        </div>
      </div>
      <LawsBannerContainer />
      <div>
        <LinkRouter to='/main'>Volver al Menú</LinkRouter>
      </div>
    </div>
  );
}

export default LawsMenuPage;
