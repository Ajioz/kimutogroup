import 'jquery'
import 'materialize-css';
import { Slider, Slide, Caption } from 'react-materialize'


import background from '../../images/carousel/Background.png'
import background2 from '../../images/carousel/Background2.png'
import background3 from '../../images/carousel/Background3.jpg'
import background4 from '../../images/carousel/Background4.jpg'


export default function Slides(){
  return (
    <>
     <div className='space' style={{height: '10vh'}}></div>
      <Slider style={{marginBottom: '-50px'}}>
         <Slide image={<img alt="" src={background}/>}>
          <Caption placement="center">
            <h3>We are Road Master</h3>
            <h5 className="light grey-text text-lighten-3">We Design and construction of roads, drainages and bridges</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background2}/>}>
          <Caption placement="left">
            <h3>We do Procurement Services</h3>
            <h5 className="light grey-text text-lighten-3">KEL has vast resources of highly skilled and dedicated professionals (project managers,engineers, technicians and trainers)</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background3}/>}>
          <Caption placement="right">
            <h3>We carry Equipment Protection</h3>
            <h5 className="light grey-text text-lighten-3">High Quality Coating, Flooring & Lining Protection Services for: Individuals, Corporate Bodies, Oil and Gas, Military</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background4}/>}>
          <Caption placement="center">
            <h3>We are expert in EPICC</h3>
            <h5 className="light grey-text text-lighten-3">
              We have vast experience in engineering design, procurement, installation, construction and commissioning (EPICC)
            </h5>
          </Caption>
        </Slide>
      </Slider>
    </>
     )
};