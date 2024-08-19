import React from 'react'
import Card from '../Card'

const All = () => {

    const AllCourse =[
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg",
            "crs_name" : "Top 10 Unique Project Ideas for College Students",
            "crs_author": "Lukesh S",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 7

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
            "crs_name" : "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
            "crs_author": "Tarun Singh",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 5

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/03/Untitled-design-41.jpg",
            "crs_name" : "10 Hardest and Easiest Programming Languages in 2024",
            "crs_author": " Saakshi Priyadarshini",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 6

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg",
            "crs_name" : "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
            "crs_author": "Saakshi Priyadarshini",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 8

        },
        {
            "crs_img": "",
            "crs_name" : "How to Render an Array of Objects in React? [in 3 easy steps]",
            "crs_author": "Tarun singh",
            "crs_date" : "Ap 06, 2024",
            "crs_readTime" : 7

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/07/ui-ux-project-ideas-for-beginners.webp",
            "crs_name" : "Top 10 UI/UX Project Ideas for Beginners",
            "crs_author": "Isha Sharma",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 4

        }
    ]
  return (
   <>
    <div class="container px-4 px-lg-2 mt-5 pb-5" style={{backgroundColor:"#fceeeb"}}>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {
                AllCourse.map((course)=>{
                    return <Card course={course} />
                })
            }
        </div>
        </div>
   
    </>

  )
}

export default All