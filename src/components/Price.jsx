const Price = () => {
  return (
    <section className="price-card__pricing">
      <h2 className="price-card__section-title">Monthly Subscription</h2>
      <p className="price-card__amount">
        <span className="price-card__price">$29</span>
        <span className="price-card__period">per month</span>
      </p>
      <p className="price-card__billing-info">
        Full access for less than $1 a day
      </p>
      <a href="#signup" className="price-card__cta-btn">Sign Up
      </a>
    </section>
  );
};

export default Price;
