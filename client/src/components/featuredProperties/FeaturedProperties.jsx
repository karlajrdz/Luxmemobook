import "./featuredProperties.css";

const FeaturedProperties = () => {
  //const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://dykhzttck504m.cloudfront.net/thumbnails/app/images/search/36088_385fb598e30827595c06b393ef899d74d2219c89e45a2082207fda4bfda9e080.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Maison  Blanc Bleu </span>
        <span className="fpCity">Gouverneur, St Barts</span>
        <span className="fpPrice">Starting from $5,714</span>
        <div className="fpRating">
          <button>8.4</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dykhzttck504m.cloudfront.net/thumbnails/app/images/search/119612_b8f19f83e82b71807f2c60d9293d93b4155dfcc96a1386b5db511a37e8ba1026.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Casa Frizer</span>
        <span className="fpCity">Los Cabos , México</span>
        <span className="fpPrice">Starting from $68,725</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dykhzttck504m.cloudfront.net/thumbnails/app/images/search/130136_c575c83e31658a3da0296a1f25afe907ecee168d42a859ca5326c98f1f688966.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sunset Ridge</span>
        <span className="fpCity">Los Angeles, U.S</span>
        <span className="fpPrice">Starting from 14,126</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dykhzttck504m.cloudfront.net/thumbnails/app/images/search/102706_38928bf9e2bc8be07b58cae084112f4bd58a1f87171275755971eba0a59a73ba.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tagomago Private Island</span>
        <span className="fpCity">Ibiza, Spain</span>
        <span className="fpPrice">Starting from $17,895</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;