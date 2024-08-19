import React from 'react'
import Card from '../Card'

const FullStack = () => {

    const FullStackCourse =[
        {
            "crs_img": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230128123255/12-Best-Full-Stack-Projects-Ideas-in-2023.png",
            "crs_name" : "Best Full-Stack Development Project Ideas in 2024",
            "crs_author": "Isha Sharma",
            "crs_date" : "Aug 06, 2024",
            "crs_readTime" : 4

        },
        {
            "crs_img": "https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-full-stack-web-and-mobile-development/coding-bootcamp-full-stack-web-and-mobile-development-top-10-fullstack-frameworks-to-learn-in-2024/thumbnail01.webp",
            "crs_name" : "Top 10 Full-Stack Developer Frameworks in 2024",
            "crs_author": "Isha Sharma",
            "crs_date" : "Ap 16, 2024",
            "crs_readTime" : 6

        },
        
       
        {
            "crs_img": "https://media.geeksforgeeks.org/wp-content/uploads/20240701180006/12-Best-Database-Management-Software-in-2024.webp",
            "crs_name" : "10 Best Database Management Systems For Software Developers",
            "crs_author": "Isha Sharma",
            "crs_date" : "Mar 22, 2024",
            "crs_readTime" : 4

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
            "crs_name" : "10 Hardest and Easiest Programming Languages in 2024",
            "crs_author": " Saakshi Priyadarshini",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 6

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
            "crs_name" : "7 Unique Web Development Project Ideas for Beginners",
            "crs_author": " Lukesh S",
            "crs_date" : "Apr 02, 2024",
            "crs_readTime" : 6

        },
        
        {
            "crs_img": "https://miro.medium.com/v2/resize:fit:2000/1*UngHYlsoG2JosM9P7KrXfQ.png",
            "crs_name" : "6 Essential Prerequisites For Learning ReactJS",
            "crs_author": "Ramkumar",
            "crs_date" : "Mar 25, 2024",
            "crs_readTime" : 3

        }
    ]
  return (
   <>
    <div class="container px-4 px-lg-2 mt-5 pb-5" style={{backgroundColor:"#fcf5eb"}}>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {
                FullStackCourse.map((course)=>{
                    return <Card course={course} />
                })
            }
        </div>
        </div>
   
    </>

  )
}

export default FullStack
