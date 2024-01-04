import style from "./TrendSection.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <Trend />
      </div>
    </div>
  );
}
