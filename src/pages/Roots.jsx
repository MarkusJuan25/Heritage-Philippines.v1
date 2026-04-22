import ActPage from "./ActPage.jsx";
import { actPages } from "../data/heritage.js";

export default function Roots() {
  return <ActPage page={actPages.roots} next={{ label: "Continue To Journey", to: "/journey" }} />;
}
