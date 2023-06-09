import Badge from "../atoms/Badge";
import Title from "../atoms/Title";
import TitleWrapper from "../molecules/TitleWrapper";
import Faq from "../molecules/Faq";
import { useState } from "react";

const faqs = [
   {id: 1, qry : 'Add your question title here', ans: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.' },
   {id: 2, qry : 'Add your question title here', ans: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.' },
   {id: 3, qry : 'Add your question title here', ans: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.' },
   {id: 4, qry : 'Add your question title here', ans: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.' },
   {id: 5, qry : 'Add your question title here', ans: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.' },
]

export default function Faqs() {
   const [openFaq, setOpenFaq] = useState(null);

   const handleOpenFaq = (id) => { 
      if(id === openFaq){
         setOpenFaq(null);
         return;
      }
      setOpenFaq(id);
   };

   return (
      <section className="ox-faqs">
         <div className="container">
            <div className="ox-faqs__content">
               <TitleWrapper>
                  <Badge>FAQ’s</Badge>
                  <Title>Frequently Asked Questions.</Title>
               </TitleWrapper>
               <div className="ox-faqs__accordion">
                  {faqs.map((faq)=> {
                     return <Faq key={faq.id} openFaq={openFaq} handleOpenFaq={handleOpenFaq} {...faq} />
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}
