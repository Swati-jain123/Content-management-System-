
import React from 'react';
import {format} from 'date-fns';
import { Link } from 'react-router-dom';
export default function Post({_id,title,summary,author,cover,content,createdAt}){
    return(
        <div className="post">
           
        <div className="image">
        <Link to={`/post/${_id}`}>
        <img src={'http://localhost:8000/'+cover} alt="error"/>
       </Link>
        </div>
         <div className="texts">
         <Link to={`/post/${_id}`}>
         <h2>{title}</h2>
         </Link>
        <p className="info">
                <a className="author" href="/">{author}</a>
                <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary">{summary}

</p>
         </div>
      
</div>

    );

}