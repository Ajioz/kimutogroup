import Division from "../division/Division";
import divisionData from '../../groupDivision'
import './divisions.css'


const Divisions = () => {
  return( 
     <div className="posts">
            { divisionData.map((item) =>  (
               <Division {...item}  key={item.id}/>
            ))}
        </div>
  );
};

export default Divisions;
