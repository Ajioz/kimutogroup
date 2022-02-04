import './division.css'
import { Link } from 'react-router-dom'


const Division = ({img, id, title}) => {

 return (
        <>
            <Link to = {`/division/${id}` }  className="post link" key={id} >
                <img className="postImg" src={img} alt="" />
                <div className="postInfo">
                    <span className="postTitle">{title}</span>
                </div>
                <div className="btnz">
                     <button>Learn More</button>
                </div>
            </Link>
        </>
    )
};

export default Division;
