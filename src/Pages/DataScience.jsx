import React from 'react'
import Card from '../Card'

const DataScience = () => {

    const DScourse =[
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            "crs_name" : "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            "crs_author": "Isha Sharma",
            "crs_date" : "Jul 23, 2024",
            "crs_readTime" : 6

        },
        {
            "crs_img": "https://www.skillvertex.com/blog/wp-content/uploads/2023/10/Can-Commerce-Student-Do-Data-Analytics.jpg",
            "crs_name" : "Can A Commerce Student Do Data Science?",
            "crs_author": " Saakshi Priyadarshini",
            "crs_date" : "Apr 16, 2024",
            "crs_readTime" : 3

        },
        {
            "crs_img": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201204214338/What-are-the-Roles-and-Responsibilities-of-a-Data-Scientist.png",
            "crs_name" : "Roles and Responsibilities of a Data Scientist",
            "crs_author": "  Jaishree Tomar",
            "crs_date" : "Apr 16, 2024",
            "crs_readTime" : 6

        },
        {
            "crs_img": "https://i0.wp.com/www.institutedata.com/wp-content/uploads/2023/10/How-long-does-it-take-to-learn-data-science.png?w=940&ssl=1",
            "crs_name" : "How Long Would It Take to Learn Data Science?",
            "crs_author": " Meghana D",
            "crs_date" : "Apr 16, 2024",
            "crs_readTime" : 4

        },
        {
            "crs_img": "https://theninehertz.com/wp-content/uploads/2023/02/Artificial_Intelligence_vs_Machine_Learning_vs_Data_Science.png",
            "crs_name" : "AI vs ML vs Data Science: What Should You Learn In 2024?",
            "crs_author": "Archana",
            "crs_date" : "Aug 16, 2024",
            "crs_readTime" : 4

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
            "crs_name" : "10 Best Data Science Online Courses for Beginners | 2024",
            "crs_author": "Srinithi Sankar",
            "crs_date" : "Apr 02, 2024",
            "crs_readTime" : 7

        }
    ]
  return (
   <>
    <div class="container px-4 px-lg-2 mt-5 pb-5" style={{backgroundColor:"#eefceb"}}>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {
                DScourse.map((course)=>{
                    return <Card course={course} />
                })
            }
        </div>
        </div>
   
    </>

  )
}

export default DataScience
