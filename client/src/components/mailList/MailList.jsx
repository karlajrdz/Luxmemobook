import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Enjoy the finest stays!</h1>
      <span className="mailDesc">Sign up for exceptional quality homes and experiences in the most desirable destinations</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList