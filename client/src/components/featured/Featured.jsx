//import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.jamesedition.com/listing_images/2020/12/23/01/47/50/06cbee94-c549-484d-a6d6-e8db5f6824e2/je/1100xxs.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Costa Rica</h1>
          <h2>50 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://img.jamesedition.com/listing_images/2021/07/19/12/26/58/a253c216-3681-4cca-9b26-d96a6dbf3ffe/je/1100xxs.jpg"alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Turks and caicos</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.jamesedition.com/listing_images/2022/05/30/14/48/08/af525678-dde7-4250-aa2f-df5d752b0986/je/1100xxs.jpg"   alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Maldives</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
