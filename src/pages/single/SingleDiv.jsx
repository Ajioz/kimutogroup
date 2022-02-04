import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import divisionData from '../../groupDivision'
import './singleDiv.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


const SingleDiv = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const { divId } = useParams();
    const [porfolio, setPorfolio] = useState({});
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        const fetchInfo = () => {
            setPorfolio(divisionData.filter((item) => item.id === Number(divId)))
            setStatus(true)
        }
       fetchInfo();
    }, [divId]);


    return (
        <>
            <div className="space"></div>
            <div className="portfolio">

                <div className="top">
                    {  status && <img src ={`/${porfolio[0].img}`} alt={porfolio[0].id} /> }
                </div>

                <div className="center">
                     <div className="title">
                       {status && porfolio[0].title}
                       <div className="line"></div>
                     </div>
                    <div className="story">
                        {status && porfolio[0].story}
                    </div>
                </div>

                <div className="bottom" >
                     <div className="offering-left"></div>
                     <div className="offering-center" data-aos="zoom-in" data-aos-delay="200">
                          {status && porfolio[0].offering.map((offer, index)=>{
                             return(
                                <ul key={index}>
                                    <li className='offer' data-aos="fade-in" data-aos-delay="300">{offer}</li>
                                </ul>
                             )
                           })}
                     </div>
                     <div className="offering-right" data-aos="fade-down" data-aos-delay="300">
                         We Offer
                         <div className="offer-line"></div>
                     </div>
                </div>

            </div>
        </>
    );
    
};

export default SingleDiv;
