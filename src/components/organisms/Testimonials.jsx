import { useState } from "react"

const testimonials = [
   {id: 1, name: "Sarah Smith", date: "Nov 20, 2022", time: "02:30", testimonial: "I recently used this website template for my business website and I couldn't be happier with the results. The responsive design made it easy for me to reach."},
   {id: 2, name: "Sarah Smith", date: "Nov 20, 2022", time: "02:30", testimonial: "Thanks for the great service. Keep up the excellent work. Saas has got everything I need. I will let my mum know about this, she could really make use of saas"},
   {id: 3, name: "Sarah Smith", date: "Nov 20, 2022", time: "02:30", testimonial: "I recently used this website template for my business website and I couldn't be happier with the results. The responsive design made it easy for me to reach."},
   {id: 4, name: "Sarah Smith", date: "Nov 20, 2022", time: "02:30", testimonial: "I recently used this website template for my business website and I couldn't be happier with the results. The responsive design made it easy for me to reach."},
   {id: 5, name: "Sarah Smith", date: "Nov 20, 2022", time: "02:30", testimonial: "I recently used this website template for my business website and I couldn't be happier with the results. The responsive design made it easy for me to reach."},
   {id: 6, name: "Sarah Smith", date: "Nov 20, 2022", time: "02:30", testimonial: "I recently used this website template for my business website and I couldn't be happier with the results. The responsive design made it easy for me to reach."},
]


export default function Testimonials() {
   const [active, setActive] = useState(1);


  return (
   <div className="ox-testimonials">
      <div className="container">
         <div className="ox-testimonials__content">
            <div className="ox-testimonials__testimonialswrap">
               {testimonials.map((testimonial, index)=> {
                  return (
                     <div key={testimonial.id} style={{display: `${index === active ? "block" : "none"}`}}>
                        {testimonial.testimonial}
                     </div>
                  ) 
               })}
               {testimonials.map((testimonial, index)=> {
                  return (
                     <div key={testimonial.id} onClick={() => setActive(index)}>
                        {testimonial.name}
                        {testimonial.date}
                     </div>
                  ) 
               })}
            </div>
         </div>
      </div>
   </div>
  )
}
