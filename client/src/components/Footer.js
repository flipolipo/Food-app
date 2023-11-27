import React, { useEffect, useState } from 'react';
import './footer.css';
import { addData } from '../service/apiPostData';
import { fetchData } from '../service/apiGetData';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(null);
  const [email, setEmail] = useState(null);
  const [subscriptions, setSubscritpions] = useState([]);
  const [information, setInformation] = useState('');

  useEffect(() => {
    fetchData('footer').then((data) => setSubscritpions(data));
  }, []);

  function handleSubscribe() {
    setIsSubscribed(true);

    if (subscriptions.some((element) => element.email === email)) {
      setInformation('email already registered');
    } else {
      const newEmail = {
        email,
      };
      addData('footer', newEmail);
      setSubscritpions([...subscriptions, newEmail]);
      setInformation('Subscribed!');
    }

    setTimeout(() => setIsSubscribed(null), 3000);
  }

  return (
    <div className="footer">
      <div className="socialMediaIcons">
        <a className="icon" href="https://www.facebook.com/profile.php?id=100027126266064">
          <img
            className="socialMediaIcon"
            src={process.env.PUBLIC_URL + '/facebook.png'}
          />
        </a>
        <a className="icon" href="http://pinterest.com">
          {' '}
          <img
            className="socialMediaIcon"
            src={process.env.PUBLIC_URL + '/pinterest.png'}
          />
        </a>
        <a className="icon" href="http://instagram.com">
          <img
            className="socialMediaIcon"
            src={process.env.PUBLIC_URL + '/instagram.png'}
          />
        </a>
        <a className="icon" href="http://twitter.com">
          <img
            className="socialMediaIcon"
            src={process.env.PUBLIC_URL + '/twitter.png'}
          />
        </a>
        <a className="icon" href="http://youtube.com">
          <img
            className="socialMediaIcon"
            src={process.env.PUBLIC_URL + '/youtube.png'}
          />
        </a>
      </div>
      <div className="subscription">
        {isSubscribed ? (
          <>{information}</>
        ) : (
          <>
            <p>
              <label>
                If you want to stay up to date with newest recepies kindly
                provide your email here:
              </label>
            </p>
            <p>
              <input
                placeholder="email"
                name="name"
                id="name"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>

              <button onClick={handleSubscribe}>Subscribe!</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
