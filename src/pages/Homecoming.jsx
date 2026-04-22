import ActPage from "./ActPage.jsx";
import { actPages } from "../data/heritage.js";

export default function Homecoming() {
  return <ActPage page={actPages.homecoming} next={{ label: "Explore Packages", to: "/packages" }} />;
}
