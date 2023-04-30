import { css } from "@linaria/core";
import PortfolioChart from "../Charts/PortfolioChart";

const portfolioCardClassname = css`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
  min-width: 6rem;
  min-height: 5rem;
  max-height: 20rem;
  border-radius: 5px;
  border: var(--greyBorder);
  box-shadow: var(--mainShadow);

  & > div {
    padding: 1.25rem 1rem;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
    height: 100%;
    padding-bottom: 0;
    border-right: 1px solid rgba(217, 217, 217, 0.259);
  }

  .title {
    font-size: 1.2rem;
  }

  .chartHolder {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }

  .amount {
    color: var(--textSecondary);
  }

  .total {
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

const PortfolioCard = () => (
  <div className={portfolioCardClassname}>
    <div className="main">
      <header>
        <h2 className="title">Your Portfolio</h2>
      </header>
      <div className="chartHolder">
        <PortfolioChart />
        <div>
          <div className="amount">2.5578 BTC</div>
          <div className="amount">3.5288 ETH</div>
        </div>
      </div>
    </div>
    <div>
      <div className="total">$8520.50</div>
      <div className="amount">Pending Balance</div>
    </div>
  </div>
);

export default PortfolioCard;
