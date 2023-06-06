import Feature from "../molecules/Feature";

const features = [
   { id: 1, desc: "Build a solution that wins you more customers and projects." },
   { id: 2, desc: "Design a website thats both modern, fast and effective." },
   { id: 3, desc: "Easily customise your site to suit your own brands" },
];

export default function Features() {
   return (
      <div className="ox-features">
         <div className="container">
            <div className="ox-features__content">
               <div className="ox-features__cards">
                  {features.map((feature) => {
                     return <Feature key={feature.id} {...feature} />;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
