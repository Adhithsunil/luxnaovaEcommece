import React, { useState, useContext } from 'react';
import myContext from '../../context/data/myContext';
// handleAddCommentClick
function Addcomment() {
  const [comment, setComment] = useState({
    name: '',
    description: '',
    rating: 0,
    image: '',
  });

  const context = useContext(myContext);
  const { addComment } = context;

  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    const finalComment = {
      ...comment,
      name: comment.name || user?.user?.name || '', // Add name field addComment
      email: user?.user?.email || '',
      image: comment.image || '/personid.jpg',
    };

    addComment(finalComment);
    setComment({ name: '', description: '', rating: 0, image: '' });


    // After 3 second of submit comment click redirected to home 
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);


  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col space-y-2 bg-gray-200 px-10 py-10 rounded-xl'>
        <h2 className='text-xl font-bold'>Add Comment</h2>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='name' className='mb-1 text-gray-700'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={comment.name}
              onChange={handleChange}
              className='border border-gray-300 rounded-md px-2 py-1 focus:outline-blue-500'
              placeholder='Enter your name'
            />
          </div>
          <div className='flex flex-col mt-2'>
            <label htmlFor='description' className='mb-1 text-gray-700'>
              Comment:
            </label>
            <textarea
              id='description'
              name='description'
              value={comment.description}
              onChange={handleChange}
              className='border border-gray-300 rounded-md px-2 py-1 focus:outline-blue-500 h-24'
              placeholder='Write your comment here'
            />
          </div>
          <div className='flex flex-col mt-2'>
            <label htmlFor='rating' className='mb-1 text-gray-700'>
              Rating:
            </label>
            <select
              id='rating'
              name='rating'
              value={comment.rating}
              onChange={handleChange}
              className='border border-gray-300 rounded-md px-2 py-1 focus:outline-blue-500'
            >
              <option value={0}>0 Stars</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
          <div className='flex flex-col mt-2'>
            <label htmlFor='image' className='mb-1 text-gray-700'>
              Image (Optional):
            </label>
            <input
              type='text'
              id='image'
              name='image'
              value={comment.image}
              onChange={handleChange}
              className='border border-gray-300 rounded-md px-2 py-1 focus:outline-blue-500'
              placeholder='Enter image URL'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-4 hover:bg-blue-700'
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addcomment;
