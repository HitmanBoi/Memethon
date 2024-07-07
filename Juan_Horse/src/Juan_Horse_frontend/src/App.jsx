import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Token</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Horse Crypto Token</h1>
          <p>Revolutionizing the equestrian industry with blockchain technology</p>
          <button>Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <ul>
            <li>
              <i className="fas fa-horse"></i>
              <h3>Decentralized Horse Ownership</h3>
              <p>Own a piece of a horse with our tokenized ownership model</p>
            </li>
            <li>
              <i className="fas fa-chart-line"></i>
              <h3>Transparent Market Data</h3>
              <p>Get real-time market data and insights on horse performance</p>
            </li>
            <li>
              <i className="fas fa-lock"></i>
              <h3>Secure Transactions</h3>
              <p>Secure and transparent transactions with blockchain technology</p>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Horse Crypto Token</p>
      </footer>
    </div>
  );
}

export default App;