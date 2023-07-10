import Card from "../../components/Card/Card";
import ImpressionChart from "../../components/Charts/ImpressionChart";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
import ImpressionsBtn from "../../components/ImpressionsBtn";
import { CurrencyData, Transaction } from "../../types";
import styles from "./Home.module.scss";
import { css } from "@linaria/core";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ArrowLeft, ArrowRight } from "../../components/Arrow/Arrow";
import ActivityBlock from "../../components/ActivityBlock/ActivityBlock";
import FavCurrencyCard from "../../components/Card/FavCurrencyCard";
import PortfolioCard from "../../components/Card/PortfolioCard";

const activityCardClassname = css`
  padding-left: 0;
  padding-right: 0;

  .cardTitle {
    padding-left: 1rem;
  }
`;

const impressionChartClassname = css`
  margin-top: 3rem;
`;

/* eslint-disable @typescript-eslint/no-var-requires */
const accounts: CurrencyData[] = require("../../test/mocks/currencies.json");
const activities: Transaction[] = require("../../test/mocks/activities.json");

export default () => (
  <div className={styles.main}>
    <header className={styles.header}>
      <div className={styles.titles}>
        <h2 className={styles.overviewTitle}>Overview Dashboard</h2>
        <h3 className={styles.viewTitle}>Trading View</h3>
      </div>
      <nav className="toolbar"></nav>
    </header>
    <main>
      <ScrollMenu
        LeftArrow={ArrowLeft}
        RightArrow={ArrowRight}
        wrapperClassName={styles.currencyCards}
      >
        {accounts.map(({ ticker, equity, marketCap }) => (
          <CurrencyCard
            key={ticker}
            ticker={ticker}
            equity={equity}
            marketCap={marketCap}
          />
        ))}
      </ScrollMenu>
      <section className={styles.infoCards}>
        <Card
          title="Impressions"
          headerElements={[
            <ImpressionsBtn key="weeklyImpressions" className="current">
              Weekly
            </ImpressionsBtn>,
            <ImpressionsBtn key="monthlyImpressions">Monthly</ImpressionsBtn>,
          ]}
        >
          <ImpressionChart className={impressionChartClassname} />
        </Card>
        <Card title="Activity" className={activityCardClassname}>
          {activities.map(({ id, ticker, amount, type, status }) => (
            <ActivityBlock
              key={id}
              ticker={ticker}
              amount={amount}
              type={type}
              status={status}
            />
          ))}
        </Card>
        <FavCurrencyCard />
        <PortfolioCard />
      </section>
    </main>
  </div>
);
