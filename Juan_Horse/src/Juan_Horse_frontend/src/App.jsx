import React from 'react';

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <h1>$JUAN - The Horse</h1> 
        <img src="public/android-chrome-192x192.png" alt="Logo" />
        <p>Revolutionizing the horse racing industry with blockchain technology</p>
        <br />
        <button>Learn More</button>
      </header>
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>
            <i className="fas fa-horse"></i>
            <h3>Decentralized Horse Racing</h3>
            <p>Transparent and fair horse racing on the blockchain</p>
          </li>
          <li>
            <i className="fas fa-chart-line"></i>
            <h3>Tokenized Horse Ownership</h3>
            <p>Buy, sell, and trade horse ownership tokens</p>
          </li>
          <li>
            <i className="fas fa-lock"></i>
            <h3>Secure and Transparent</h3>
            <p>Secure and transparent transactions on the blockchain</p>
          </li>
        </ul>
      </section>
      <section className="tokenomics">
        <h2>Tokenomics</h2>
        <p>Total Supply: </p>
        <p>Token Price: $0.10</p>
        <button>Buy HORSE Tokens</button>
        <img src="public/Horse_grazing.jpeg" alt="Horse Grazing" height={100} />
      </section>
    </div>
  );
};

export default App;