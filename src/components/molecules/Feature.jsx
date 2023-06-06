export default function Feature({ id, desc }) {
   return (
      <div className="ox-feature">
         <h1 className="ox-feature__id">{id}</h1>
         <p className="ox-feature__desc">{desc}</p>
      </div>
   );
}
