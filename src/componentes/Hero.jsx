/* eslint-disable react/prop-types */
export default function Hero({ title, date, description }) {
  return (
    <div className="hero-container">
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
