import 'jquery'
import 'materialize-css';
import { Slider, Slide, Caption } from 'react-materialize'


import background from '../../images/carousel/Background.png'
import background2 from '../../images/carousel/Background2.jpg'
import background3 from '../../images/carousel/Background3.jpg'
import background4 from '../../images/carousel/Background4.jpg'
import background5 from '../../images/carousel/oil_gas.jpg'


export default function Slides(){
  return (
    <>
     <div className='space' style={{height: '10vh'}}></div>
      <Slider style={{marginBottom: '-50px'}}>

         <Slide image={<img alt="" src={background4}/>}>
          <Caption placement="center">
            <h3>We are expert in EPICC</h3>
            <h5 className="light grey-text text-lighten-3">
              We have vast experience in engineering design, procurement, installation, construction and commissioning (EPICC)
            </h5>
          </Caption>
        </Slide>

        <Slide image={<img alt="" src={background5}/>}>
          <Caption placement="left">
            <h3>Oil & Gas servicing</h3>
            <h5 className="light grey-text text-lighten-3">Kimuto Engineering Limited provides top class services to the oil and gas industries in the areas of piping and pipeline engineering, pipeline integrity inspections, above ground storage design and construction and fire-proffing</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background}/>}>
          <Caption placement="center">
            <h3>we are road masters</h3>
            <h5 className="light grey-text text-lighten-3">We do design and construction of roads, drainages and bridges</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background2}/>}>
          <Caption placement="left">
            <h3>Something here</h3>
            <h5 className="light grey-text text-lighten-3">KEL has vast resources of highly skilled and dedicated professionals (project managers,engineers, technicians and trainers)</h5>
          </Caption>
        </Slide>

         <Slide image={<img alt="" src={background3}/>}>
          <Caption placement="right">
            <h3>We carry equipment Protection</h3>
            <h5 className="light grey-text text-lighten-3">High quality coating, flooring & lining protection services for: individuals, corporate bodies, oil and gas, military</h5>
          </Caption>
        </Slide>

        
      </Slider>
    </>
     )
};