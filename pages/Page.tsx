import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import quote from './Quote.json';
import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";

const getRandomQuote = () => {
  return quote[Math.floor(Math.random() * quote.length)];
}

const getRandomColor = () => {
  var Colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  return Colors[Math.floor(Math.random() * Colors.length)];
}
const transition = "all 1s";


function Page() {
  interface Quote {
    quote: string,
    author: string,
  }
  const [Quote, setQuote] = useState<Quote>(getRandomQuote())
  const [RandomColor, SetRandomColor] = useState<string>(getRandomColor());
  const ChangeQuote = () => {
    setQuote(getRandomQuote());
    SetRandomColor(getRandomColor());
  }
  return (
    <div className={styles.container} style={{ backgroundColor: RandomColor, transition: transition }}>
      <div id="quote-box" className={styles.quote}>
        <div className={styles.quoteContent}>
            <h2 id="text" style={{ color: RandomColor, transition: transition }} className={styles.content}><FaQuoteLeft size={20} style={{ marginRight: "5px" }} /> {Quote.quote}</h2>
            <h4 id="author" style={{ color: RandomColor, transition: transition }} className={styles.author}>- {Quote.author}</h4>
        </div>
        <div className={styles.buttons}>
          <div className={styles.links}>
            <a style={{ backgroundColor: RandomColor, transition: transition }} id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${Quote.quote}`}><FaTwitter /></a>
            <a style={{ backgroundColor: RandomColor, transition: transition }} href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${Quote.quote}`} target="_blank"><FaTumblr /></a>
          </div>
          <button style={{ backgroundColor: RandomColor, transition: transition }} className={styles.button} id="new-quote" onClick={ChangeQuote}>New Quote</button>
        </div>
      </div>
      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default Page;