import Card from "./Card";
import FavCurrencyChart from "../Charts/FavCurrencyChart";
import { css } from "@linaria/core";
import { RiArrowDownSFill } from "react-icons/ri";

const favCurrencyCardClassname = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .favCurrency {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .amount {
    font-size: 1.75rem;
    font-weight: 600;
  }

  .ticker {
    font-size: 1.4rem;
  }

  .converted {
    color: var(--textSecondary);
  }

  .chartFlex {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 1;
  }

  .change {
    color: rgb(100, 201, 133);
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const FavCurrencyCard = () => (
  <Card title="Bitcoin">
    <div className={favCurrencyCardClassname}>
      <div className="container">
        <div className="favCurrency">
          <span className="amount">2.5578</span>
          <span className="ticker">BTC</span>
        </div>
        <div className="converted">$2500 USD</div>
      </div>
      <div className="chartFlex">
        <FavCurrencyChart />
        <div className="change">
          <RiArrowDownSFill size="24px" />
          <span className="changeValue">8.5</span>
        </div>
      </div>
    </div>
  </Card>
);

export default FavCurrencyCard;
