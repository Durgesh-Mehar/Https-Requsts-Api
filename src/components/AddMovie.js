import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;

















// import React, {useState} from "react";
// import classes from "./AddMovie.module.css";

// const AddMovie = (props) => {

//  const [title,settitle]=useState('')
// const [openingText,setopeningText]=useState('')
// const [date,setdate]=useState('')

// const handleform =(e)=>{
//     e.preventDefault()

//     const data = {
//         Title:title,
//         OpeningText:openingText,
//         Date:new Date(date)
//     }

//     props.onAddMovie(data);
//     settitle('')
//     setdate('')
//     setopeningText('')
// }

//   return (
//     <form onSubmit={handleform}>
//       <div className={classes.section}>
//         <div className={classes.input}>
//           <div>
//             <label htmlFor="title">Title:</label>
//           </div>
//           <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
//         </div>
//         <div>
//           <div>
//             <label htmlFor="opening-text">Opening Text:</label>
//           </div>
//           <input type="text" value={openingText} onChange = {(e)=>{setopeningText(e.target.value)}}/>
//         </div>
//         <div>
//           <div>
//             <label htmlFor="release-date">Release Date:</label>
//           </div>
//           <input type="date" value={date} onChange = {(e)=>{setdate(e.target.value)}}/>
//         </div>
//         <button type="submit">Add Movie</button>
//       </div>
//     </form>
//   );
// };

// export default AddMovie;


