export default function Faq({ id, qry, ans, openFaq, handleOpenFaq }) {

   return (
      <div className="ox-faq" onClick={()=> handleOpenFaq(id)}>
         <div className="ox-faq__qrywrap" >
            <h4 className="ox-faq__qry">{qry}</h4>
         </div>
         <div className={`ox-faq__answrap ${id === openFaq ? 'ox-faq__answrap--open' : ''}`}>
            <p className="ox-faq__ans">{ans}</p>
         </div>
      </div>
   );
}
