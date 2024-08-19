import React from 'react'

const Card = ({course}) => {
  return (
  
       <div className='col pt-5'>
         <div className='card h-100' >
            <img src={course.crs_img} class="card-img-top" alt="..."/>
            <div className='card-body'>
                <h5 class="card-title">{course.crs_name}</h5>
                <div class="card-text text-muted">
                    <i className='card-author mt-2 text-decoration-none'><span style={{color:"#aaa"}}>By</span>&nbsp;{course.crs_author}</i>
                    <div class="mt-2 d-flex flex-row flex-nowrap justify-content-between">
                        <p class="mb-0 card-text">{course.crs_date}</p>
                        <p class="mb-0 card-text">{course.crs_readTime} Min Read </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
   
  )
}

export default Card