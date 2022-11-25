import React from 'react'
import TestimonialCard from './TestimonialCard'
import temp from "../images/test.jpg";
import styles from "../styles/Testimonialcard.module.css"
import { Pagination } from 'antd';

export default function Testimonials({testimonials}) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const per_page = 6;

    const indexOfLastPost = currentPage * per_page;
    const indexOfFirstPost = indexOfLastPost - per_page;
    const currentPosts = testimonials.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
           <div>
                <h3 className={styles.testimonials_h3}>{`Don't just take our word for it`}</h3>
                <p className={styles.testimonials_p}>See how freelancers are saving the day for people like you.</p>
                <div className={styles.testimonial_card_list}>
                    {currentPosts.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            image={temp}
                            rating={testimonial.rating}
                            testimony={testimonial.testimony}
                            servicetype={testimonial.servicetype}
                        />
                    ))}
                </div>
           </div>
            <Pagination
                defaultCurrent={1}
                total={testimonials.length}
                pageSize={per_page}
                onChange={paginate}
                className="pagination"
            />
        </div>
    )
}

//   return (
//     <div>
//         {testimonials?.map((testimonial, index) => (
//             <TestimonialCard 
//                 key={index}
//                 name={testimonial.name}
//                 image={temp}
//                 rating={testimonial.rating}
//                 testimony={testimonial.testimony}
//                 servicetype={testimonial.servicetype}
//             />
//         ))}
//         <Pagination 
//             defaultCurrent={1}
//             total={testimonials.length}
//             pageSize={per_page}
//             onChange={handleChange}

//         />
//     </div>
//   )
// }
