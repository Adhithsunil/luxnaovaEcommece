import React, { useState, useEffect } from 'react';
import './DisplayComments.css';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { fireDB } from "../../fireabase/FirebaseConfig";
import Navbar from '../navbar/Navbar';



function DisplayComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getComments = () => {
    setLoading(true);
    const q = query(collection(fireDB, 'comments'), orderBy('time', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsArray = [];
      snapshot.forEach((doc) => {
        commentsArray.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsArray);
      setLoading(false);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
    <Navbar/>
    <div className='flex justify-center overflow-hidden '>
      {loading ? <p>Loading comments...</p> : (
       <div className="comments-container bg-gray-800 m-7">
       {comments.map((comment) => (
         <div key={comment.id} className="comment">
            <div className="classforcomment ">
           <div className="comment-header flex items-center justify-between m-5">
             <div className="comment-info flex items-center gap-5">
               {comment.image && (
                 <img
                   src={comment.image}
                   alt="../../../public/personid.jpg"
                   className="comment-image h-10 rounded-full mr-2"
                 />
               )}
               <p className="comment-author font-bold">{comment.name}</p>
             </div>
             <p className="comment-time text-gray-500">
               {new Date(comment.time.seconds * 1000).toLocaleString()}
             </p>
           </div>
           <p className="comment-rating mt-2 flex justify-center"> <img className='h-6' src="/reshot-icon-star.svg" alt="" /> Rating: {comment.rating} Stars</p>
           <p className="comment-description mt-2">{comment.description}</p>
           </div>
         </div>
       ))}
     </div>
   )}
 </div>
 </div>
  );
}

export default DisplayComments;
