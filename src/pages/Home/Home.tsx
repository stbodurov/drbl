import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
import getCurrencyCardIcon from "../../components/CurrencyCard/getCurrencyCardIcon";
import ImpressionsBtn from "../../components/ImpressionsBtn";
import { TickerType } from "../../types";
import styles from "./Home.module.scss";

import {
  ScrollMenu,
  // VisibilityContext
} from "react-horizontal-scrolling-menu";
import { ArrowLeft, ArrowRight } from "../../components/Arrow/Arrow";

/* eslint-disable @typescript-eslint/no-var-requires */
const currencyData: CurrencyData[] = require("../../test/mocks/currencies.json");

interface CurrencyData {
  ticker: TickerType;
  equity: number;
  marketCap: string;
  icon: JSX.Element;
}

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
        {currencyData.map(({ ticker, equity, marketCap }: CurrencyData) => (
          <CurrencyCard
            key={ticker}
            ticker={ticker}
            equity={equity}
            marketCap={marketCap}
            icon={getCurrencyCardIcon(ticker)}
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
        <Card title="Activity" />
        <Card title="Bitcoin" />
        <Card title="Your Portfolio" />
      </section>
    </main>
  </div>
);
