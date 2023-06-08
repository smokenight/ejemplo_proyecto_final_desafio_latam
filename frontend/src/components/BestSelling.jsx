import { useEffect } from 'react';

const BestSelling = () => {
  return (
    <section className="product">
      <h2 className="product-category">best selling</h2>
      <button className="pre-btn"><img src="/assets/img/arrow.png" alt="" /></button>
      <button className="nxt-btn"><img src="/assets/img/arrow.png" alt="" /></button>
      <div className="product-container">
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card1.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card2.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card3.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card4.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card5.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card6.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card7.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="/assets/img/card8.png" className="product-thumb" alt="" />
              <button className="card-btn">add to whislist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;