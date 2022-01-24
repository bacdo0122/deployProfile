import i18next from "../../i18n";
import { Select } from "../Select";
import { SlideNavItem } from "../SlideNavItem";
import { SwitchColor } from "../SwitchColor";
import "./style.scss";

interface Props {
  nav: boolean;
  t: any;
  switchs: boolean;
  setSwitchs: React.Dispatch<React.SetStateAction<boolean>>;
}
const data = [
  { text: "vn", value: "vn" },
  { text: "en", value: "en" },
];

const SlideNavigation = (props: Props) => {
  const { nav, t, setSwitchs, switchs } = props;

  return (
    <div
      className={nav ? `slide-nav active` : `slide-nav`}
      style={
        switchs
          ? { backgroundColor: "#fff", color: "#000" }
          : { backgroundColor: "#353353", color: "#fff" }
      }
    >
      <div className="slide-logo header__title">Bac</div>
      <Select data={data} />

      <SwitchColor setSwitchs={setSwitchs} switchs={switchs} />
      <ul className="slide-block">
        {t("data", { returnObjects: true }).map(
          (item: { text: string; icon: string }, index: number) => {
            return (
              <SlideNavItem
                icon={<i className={item.icon}></i>}
                text={item.text}
                key={index}
                switchs={switchs}
              />
            );
          }
        )}
      </ul>
      <div className="slide-bottom">© 2020 Bac Template.</div>
    </div>
  );
};
export default SlideNavigation;
