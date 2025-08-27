import "./Head.css";
import travelData from "./data";

export default function Head() {
  return (
    <>
    <div className="heading" >
      <h1>My Travel Journey 🌍</h1>
    </div>
    {travelData.map((item) => (
    // <header className="header"> <img src="src/react.jpg" alt="React Logo" className="logo" /> <h1 className="title">My Travel Journey</h1> </header>
    // <div className="card">
    //   <img src="src/react.jpg" alt="Mount Fuji" className="card-image" />
      <div className="card-content">
        <div className="card-location">
          <span className="location-icon">📍</span>
          {/* <span>{item.id}</span> */}
          <span className="country">{item.country}</span>
          <a href={item.googleMapsUrl} target="_blank" rel="noreferrer" className="google-link">
            View on Google Maps
          </a>
        </div>

        <h1 className="card-title">{item.title}</h1>
        <p className="card-dates">{item.startDate} - {item.endDate}</p>
        <p className="card-description">{item.description}</p>
        <hr></hr>
      </div>
    ))}
    </>
  );
}
