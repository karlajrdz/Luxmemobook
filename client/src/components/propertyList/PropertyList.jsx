import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  // pass all images
  const images = [
    "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508103900-most-exclusive-hotels----resort-at-pedregal---air-view-resort-left-side.jpg",
    "https://img.jamesedition.com/listing_images/2022/07/04/20/11/32/54b63214-9bc9-4699-8408-86515e5bcd80/je/1100xxs.jpg](https://img.jamesedition.com/listing_images/2022/07/04/20/11/32/54b63214-9bc9-4699-8408-86515e5bcd80/je/1100xxs.jpg",
    "https://media.cntraveler.com/photos/61e63075ea6fd726d741bdaf/master/w_1920%2Cc_limit/Nanuku-Auberge-Resorts-Collection_2019_Auberge-Beach-Villas.jpg](https://media.cntraveler.com/photos/61e63075ea6fd726d741bdaf/master/w_1920%2Cc_limit/Nanuku-Auberge-Resorts-Collection_2019",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttq3GVG3cVpKPkQO_-xi46aTRHWRRN---Tw&usqp=CAU",
    "https://www.planetware.com/wpimages/2020/07/world-best-luxury-all-inclusive-resorts-four-seasons-tented-camp-golden-triangle-thailand.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
