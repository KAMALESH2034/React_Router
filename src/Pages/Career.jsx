import React from 'react'
import Card from '../Card'

const Career = () => {

    const CareerCourse =[
        {
            "crs_img": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ac/106008c7c44d788ca1bc3affcfa0e0/Career-Logo-v2.1.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50",
            "crs_name" : "The Career Design Lab: Change your Job, Change your Life",
            "crs_author": "Remy Franklin",
            "crs_date" : "Aug 19, 2024",
            "crs_readTime" : 39

        },
        {
            "crs_img": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/f9/cf8f147a4545f09d45d907ec9d87ec/Career-Discovery-Logo.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50",
            "crs_name" : "Career Discovery Specialization",
            "crs_author": "Dan Stotz",
            "crs_date" : "Mar 28, 2024",
            "crs_readTime" : 23

        },
        {
            "crs_img": "https://res.cloudinary.com/dgjv2owk8/image/upload/f_auto/cryolayer/cdn-prod-proxied/663a5c1cc93f6c46570b777e%2F665780c5dbdbc420212fd917_course-tech-sales-p-500.png",
            "crs_name" : "Technology Sales",
            "crs_author": "vishnu",
            "crs_date" : "Jun 12, 2024",
            "crs_readTime" : 43

        },
        {
            "crs_img": "https://res.cloudinary.com/dgjv2owk8/image/upload/f_auto/cryolayer/cdn-prod-proxied/663a5c1cc93f6c46570b777e%2F665764b2288808ef31eb0033_course-accounting.png",
            "crs_name" : "Accounting",
            "crs_author": "Mark ezzie",
            "crs_date" : "Jan 15, 2024",
            "crs_readTime" : 30

        },
        {
            "crs_img": "https://res.cloudinary.com/dgjv2owk8/image/upload/f_auto/cryolayer/cdn-prod-proxied/663a5c1cc93f6c46570b777e%2F66577904c39292143a51539e_course-ads.png",
            "crs_name" : "Digital Advertising",
            "crs_author": "Nami Gwen",
            "crs_date" : "Sep 9, 2023",
            "crs_readTime" : 41

        },
        {
            "crs_img": "https://res.cloudinary.com/dgjv2owk8/image/upload/f_auto/cryolayer/cdn-prod-proxied/663a5c1cc93f6c46570b777e%2F665769432dba6f5d44fcb3a3_course-hr.png",
            "crs_name" : "Human Resource",
            "crs_author": "Ben Parker",
            "crs_date" : "May 10, 2024",
            "crs_readTime" : 37

        }
        
    ]
  return (
   <>
    <div class="container px-4 px-lg-2 mt-5 pb-5" style={{backgroundColor:"#fcebfb"}}>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {
                CareerCourse.map((course)=>{
                    return <Card course={course} />
                })
            }
        </div>
        </div>
   
    </>

  )
}

export default Career