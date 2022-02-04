import './about.css'
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../../slider';
import { partners } from '../../data';
import Statistics from '../../components/statistics/Stat'

import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
 
  useEffect(() => {
      Aos.init();
  }, []);

  // const [division, setDivision] = useState(data);
  const [index, setIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length-1;
    if(index < 0) setIndex(lastIndex);
    if(index > lastIndex) setIndex(0)
  }, [index, data])

  useEffect(() => {
   let slider =  setInterval(() => {
      setIndex(index+1);
    },6000);
    return() => clearInterval(slider);
  }, [index]);

  //For partners
  useEffect(() => {
    const lastIndex = partners.length-1;
    if(partnerIndex < 0) setPartnerIndex(lastIndex);
    if(partnerIndex > lastIndex) setPartnerIndex(0)
  }, [partnerIndex])

  useEffect(() => {
   let partner_slider =  setInterval(() => {
      setPartnerIndex(partnerIndex+1);
    },5000);
    return() => clearInterval(partner_slider);
  }, [partnerIndex]);


 return (
      <>
        <div classNameName='space' style={{height: '10vh'}}></div>
        <div className="my_container">
          <div id="ban">
            <div id="banner" >
              <h1>KIMUTO ENGINEERING</h1>
              <p>
                In the knowledge that human capital is the fulcrum upon which the growth, development and
                success of any organization depends, KIMUTO ENGINEERING LIMITED ensures that its staff
                are of the highest possible qualifications, experience and training. In this regard, we emphasis the
                training and retraining of its staff from time to time - 
                <cite style={{color: 'white', fontWeight: 'bolder'}}> Engr. Augustine O. Igbinake</cite>
              </p>
            </div>
          </div>
        </div>

        <div className="grid-flex">
            <div className="grid-left">
              <h3 className="overview" data-aos="fade-right" data-aos-delay="300">Company Overview</h3>
            </div>
            <div className="grid-right" data-aos="fade-down" data-aos-delay="200">
              <p>
                <strong>Kimuto Engineering Limited (KEL)</strong>  – formerly Kimuto Nigeria Limited, is an indigenous oil and gas servicing company. Incorporated in April 2010. we have vast experience in engineering design, procurement, installation, construction and commissioning (EPICC). <br/><br/><strong>KEL</strong> provides quality management services and human capital/manpower solutions (local and expatriate). We are constantly evolving to diversify into other sectors to improve its value chain.  has vast resources of highly skilled and dedicated professionals (project managers, engineers, technicians and trainers) who with their varied experience provide tailor-made solutions to each project we undertake. <br/><br/> Our ultimate goal will be a continuous improvement towards the target of ERROR-FREE work to avoid reworking / reject with its attendant extra cost and time.
              </p>
              <div className="cite" data-aos="fade-down" data-aos-delay="400"> 
                <p>
                  We strongly hold on to <cite><strong>John Fowler's</strong></cite> philosophy, which states thus:  <cite>"Engineers … are not mere technicians and should not approve or lend their name to any project that does not promise to be beneficent to man and the advancement of civilization."</cite>
                </p>
              </div>
            </div>
        </div>

        <section className="review" id="review">
          <h1 className="heading">
              <span>p</span><span>r</span><span>o</span><span>f</span><span>l</span><span>i</span><span>e</span>
          </h1>
        </section>
        
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>kimutogroup.com
            </h2>
          </div>
          <div className="section-center">
            {data.map((group, personIndex) => {
                const { id, img, title, detail } = group;
                let position = 'nextSlide';
                if(personIndex === index){
                  position = 'activeSlide';
                }
                if(personIndex === index-1 || (index === 0 && personIndex === data.length -1)){
                  position = 'lastSlide';
                }
                return(
                  <article key={id} className={position}>
                    <img src={img} alt={title} className='person-img' />
                    <h4>{title}</h4>
                    <p className='title'>{title}</p>
                    <p className="text">{detail}</p> 
                    <FaQuoteRight className='icon' />
                  </article>
                )
            })}
            <button className='prev' onClick={()=> setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className='next' onClick={()=> setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
          </section>


        <section className="services" id="services">
          <h1 className="heading">
            <span>c</span><span>o</span><span>r</span><span>p</span><span>o</span
            ><span>r</span><span>a</span><span>t</span><span>e</span> <span>d</span
            ><span>i</span><span>v</span><span>i</span><span>s</span><span>i</span
            ><span>o</span><span>n</span>
          </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-oil-can"></i>
            <h3>Oil & Gas Servicing</h3>
            <p>
              Pipeline Engineering, Hydro Testing, Pipeline Integrity, Fireproofing, Above Ground Storage Tanks, Fabrication and Installation.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-archway"></i>
            <h3>Public Infrastructure</h3>
            <p>
              Design and Construction of: Roads, Bridges, Buildings, Solar Power Systems, Safety and Security Systems. Maintenance: Integrity Test, Cleaning, Aesthetic Preservation.
            </p>
          </div>
          <div className="box">
            <i className="far fa-object-group"></i>
            <h3>Equipment Protection</h3>
            <p>
              High Quality Coating, Flooring & Lining Protection Services for: Individuals, Corporate Bodies, Oil and Gas and Military.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-cogs"></i>
            <h3>Equipment Leasing</h3>
            <p>Heavy Duty Construction Equipment, Rolling Equipment, Rotating Equipment, Industrial Machinery, Plants and Power Generators.</p>
          </div>
          <div className="box">
            <i className="fas fa-coins"></i>
            <h3>Brick & Tiles</h3>
            <p>
            Sandcrete Bricks, Concrete Bricks, Burnt Clay Bricks, Interlocking Paving Stones, Concrete Kerbs.
            </p>
          </div>
          <div className="box">
            <i className="fa fa-bar-chart"></i>
            <h3>project management</h3>
            <p>
            We help business plan, manage and execute project againt stipulated goals.  Our services are oriental 
            and we keep exceeding clients expectations.
            </p>
          </div>
        </div>
        </section>

        <section className="section-partner">
         <section className="review">
          <h1 className="heading">
              <span>p</span><span>a</span><span>r</span><span>t</span><span>n</span><span>e</span><span>r</span><span>s</span>
          </h1>
           </section>
          <div className="partner-center">
              {partners.map((partner, partIndex) => {
                  const { id, image } = partner;
                  let position = 'nextSlide';
                  if(partIndex === partnerIndex){
                    position = 'activeSlide';
                  }
                  if(partIndex === partnerIndex-1 || (partnerIndex === 0 && partnerIndex === partners.length -1)){
                    position = 'lastSlide';
                  }
                  return(
                    <article key={id} className={position}>
                      <img src={image} alt={id} className='partner-img' />
                    </article>
                  )
                })}
            </div>
        </section>
        <Statistics />
      </>
    );
};

export default About;
