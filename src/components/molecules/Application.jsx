import { Link } from "react-router-dom";

export default function Application({ title, desc }) {
   return (
      <Link to="/" className="ox-application">
         <div className="ox-application__appicon"></div>
         <h4 className="ox-application__title">{title}</h4>
         <p className="ox-application__desc">{desc}</p>
      </Link>
   );
}
