import Badge from "../atoms/Badge";
import Title from "../atoms/Title";
import TitleWrapper from "../molecules/TitleWrapper";
import Application from "../molecules/Application";

const application= [
   {id: 1, title: 'Slack', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.'},
   {id: 2, title: 'Shopify', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.'},
   {id: 3, title: 'Zapier', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.'},
   {id: 4, title: 'Discord', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.'},
   {id: 5, title: 'Amazon', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.'},
   {id: 6, title: 'Twitter', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.'}
]

export default function Integrations() {
   return (
      <section className="ox-integrations">
         <div className="container">
            <div className="ox-integrations__content">
               <TitleWrapper>
                  <Badge>Our Integrations</Badge>
                  <Title>View our connected applications</Title>
               </TitleWrapper>
               <div className="ox-integrations__cards">
                  {application.map((app)=>{
                     return <Application key={app.id} {...app} />
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}
