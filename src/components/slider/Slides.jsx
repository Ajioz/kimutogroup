import 'jquery'
import 'materialize-css';
import { Slider, Slide, Caption } from 'react-materialize'


import background from '../../images/Background.png'
import background2 from '../../images/Background2.png'
import background3 from '../../images/Background3.jpg'
import background4 from '../../images/Background4.jpg'


export default function Slides(){
  return (
    <>
     <div className='space' style={{height: '10vh'}}></div>
      <Slider style={{marginBottom: '-50px'}}>
         <Slide image={<img alt="" src={background}/>}>
          <Caption placement="center">
            <h3>We are Nigeria's Pride</h3>
            <h5 className="light grey-text text-lighten-3">First of its kind</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background2}/>}>
          <Caption placement="left">
            <h3>We Process Cassava</h3>
            <h5 className="light grey-text text-lighten-3">We feed the Nation</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background3}/>}>
          <Caption placement="right">
            <h3>With State of Art Equipment</h3>
            <h5 className="light grey-text text-lighten-3">Using the most Advance technologyin food cassava processing</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background4}/>}>
          <Caption placement="center">
            <h3>We Empower Local Farmers</h3>
            <h5 className="light grey-text text-lighten-3">Together we are building a formidable economy</h5>
          </Caption>
        </Slide>
      </Slider>
    </>
     )
};

// export default Slides;
