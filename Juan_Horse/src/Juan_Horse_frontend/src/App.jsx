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
        <p>Total Supply: 3.5B $JUAN </p>
        <p>Token Presale Price: To be announced</p>
        <button>Buy HORSE Tokens</button>
        <h2> Allocation </h2>
        <p>15% : Presale</p>
        
        
        <img src="public/Horse_grazing.jpeg" alt="Horse Grazing" height={100} />
      </section>
      <section className="allocation">
        <h2>Allocation</h2>
        <ul>
          <li>
            <i className="fas fa-horse"></i>
            <h3>15%</h3>
            <p>Presale</p>
          </li>
          <li>
            <i className="fas fa-chart-line"></i>
            <h3>45%</h3>
            <p>In Game Rewards</p>
          </li>
          <li>
            <i className="fas fa-lock"></i>
            <h3>25%</h3>
            <p>Airdrops</p>
          </li>
        </ul>
        <section className="allocation">
        <ul>
          <li>
            <i className="fas fa-chart-line"></i>
            <h3>10%</h3>
            <p>Community and Platform Development</p>
          </li>
            <img src="/Horse_shoe.png" alt="Horse Shoe" height={150} />
          <li>
            <i className="fas fa-lock"></i>
            <h3>5%</h3>
            <p>Horse Welfare Funds and Charity</p>
          </li>
        </ul>
      </section>
      </section>
    </div>
  );
};

export default App;