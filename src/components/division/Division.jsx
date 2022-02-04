import './division.css'
import { Link } from 'react-router-dom'


const Division = ({img, id, title}) => {

 return (
        <>
            <Link to = {`/division/${id}` }  className="post link" key={id} >
                <img className="postImg" src={img} alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        {/* {categories.map((cat) => ( <span className="postCat" key={cat._id}>{cat.name}</span> ))}     */}
                    </div>
                    <span className="postTitle">{title}</span><hr/>
                </div>
                <div className="btnz">
                     <button>Learn More</button>
                </div>
            </Link>
        </>
    )
};

export default Division;
