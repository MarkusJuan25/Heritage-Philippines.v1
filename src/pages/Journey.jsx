import ActPage from "./ActPage.jsx";
import { actPages } from "../data/heritage.js";

export default function Journey() {
  return <ActPage page={actPages.journey} next={{ label: "Continue Home", to: "/homecoming" }} />;
}
