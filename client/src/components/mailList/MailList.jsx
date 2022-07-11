import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle"><p>Get access to our bespoke travel itineraries,</p> 
      <p> unique luxury experiences, 
      and exclusive destination insights!</p></h1>
      <span className="mailDesc">
      A personal selection of luxury rental properties- only those that pass our in person rigorous inspection.
      </span>
      <span className="mailDesc">
      Situated in the most desirable neighbourhoods and paradisiac places.
      </span>
      <span className="mailDesc">
      Each one is unique and lovingly created and cared for by our stylish owners and therefore authentic to the destination.
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS HERE" />
        <button>Count me in</button>
      </div>
    </div>
  );
};

export default MailList;
