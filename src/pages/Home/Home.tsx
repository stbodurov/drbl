import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
import ImpressionsBtn from "../../components/ImpressionsBtn";
import { CurrencyData, Transaction } from "../../types";
import styles from "./Home.module.scss";
import { css } from "@linaria/core";

import {
  ScrollMenu,
  // VisibilityContext
} from "react-horizontal-scrolling-menu";
import { ArrowLeft, ArrowRight } from "../../components/Arrow/Arrow";
import ActivityBlock from "../../components/ActivityBlock/ActivityBlock";

const activityCardClassname = css`
  padding-left: 0;
  padding-right: 0;

  h2 {
    padding-left: 1rem;
  }
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
          <Chart />
        </Card>
        <Card title="Activity" className={activityCardClassname}>
          {activities.map(({ ticker, amount, type, status }) => (
            <ActivityBlock
              ticker={ticker}
              amount={amount}
              type={type}
              status={status}
            />
          ))}
        </Card>
        <Card title="Bitcoin" />
        <Card title="Your Portfolio" />
      </section>
    </main>
  </div>
);
