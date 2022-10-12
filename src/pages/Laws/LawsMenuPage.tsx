import { LinkRouter } from 'components';
import { LawsBannerContainer } from 'containers';

function LawsMenuPage() {
  return (
    <div className='center-container'>
      <div className='row m-5'>
        <LawsBannerContainer />
        <div>
          <LinkRouter to='/main'>Volver al Menú</LinkRouter>
        </div>
      </div>
    </div>
  );
}

export default LawsMenuPage;
