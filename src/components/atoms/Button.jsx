export default function Button({ children, className }) {
   return <button className={`ox-button ${className}`}>{children}</button>;
}