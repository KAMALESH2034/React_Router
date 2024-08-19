import React from 'react'
import Card from '../Card'

const CyberSecurity = () => {

    const CScourse =[
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
            "crs_name" : "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            "crs_author": "Tushar Vinocha",
            "crs_date" : "Apr 16, 2024",
            "crs_readTime" : 5

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
            "crs_name" : "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
            "crs_author": "Tushar Vinocha",
            "crs_date" : "Oct 04, 2023",
            "crs_readTime" : 4

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
            "crs_name" : "8 Different Types of Cybersecurity and Threats Involved",
            "crs_author": "Tushar Vinocha",
            "crs_date" : "Sep 08, 2023",
            "crs_readTime" : 4

        },
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
            "crs_name" : "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
            "crs_author": "Tushar Vinocha",
            "crs_date" : "Mar 25, 2024",
            "crs_readTime" : 4

        },
       
        {
            "crs_img": "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
            "crs_name" : "The Ultimate Cybersecurity Roadmap for Beginners",
            "crs_author": " Srinithi Sankar",
            "crs_date" : "Mar 23, 2024",
            "crs_readTime" : 3

        }
    ]
  return (
   <>
    <div class="container px-4 px-lg-2 mt-5 pb-5" style={{backgroundColor:"#ecebfc"}}>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {
                CScourse.map((course)=>{
                    return <Card course={course} />
                })
            }
        </div>
        </div>
   
    </>

  )
}

export default CyberSecurity