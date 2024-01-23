import './pagination.css'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

//pagination style in the website
const Paginationnum = ({totalPost, postPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i < Math.ceil(totalPost/postPerPage); i++){
        pages.push(i);
    }

    const handleChange = (e, p) => {
      setCurrentPage(p);
      console.log(currentPage);
    }
  return (
    <>
      {Math.ceil(totalPost/postPerPage)-1 > 1 ? 
      <div className='container'>
        <div className='pagination'>
          <Pagination count={Math.ceil(totalPost/postPerPage)-1} showFirstButton showLastButton onChange={handleChange}/>
        </div>
      </div> : <div></div>} 
    </>
  )
}

export default Paginationnum;