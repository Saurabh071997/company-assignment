import useWindowSize from "../../hooks/useWindowSize";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
  const [, width] = useWindowSize();
  return width <= 700 ? <MobileNavigation /> : <DesktopNavigation />;
};
