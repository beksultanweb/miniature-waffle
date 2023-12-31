import { navlinks } from "../config/navlinks";

import LanguageDropDown from "./LanguageDropDown";
import MobileBurger from "./MobileBurger";

import useScrollDirection from "../hooks/useScrollDirection";
import useScrollThreshold from "../hooks/useScrollThreshold";
import {
  getLangFromUrl,
  useTranslatedPath,
  useTranslations,
} from "../i18n/utils";

type NavItemType =
  | "nav.rooms"
  | "nav.services"
  | "nav.about"
  | "nav.team"
  | "nav.contacts";

const Header = () => {
  const lang = getLangFromUrl(new URL(window.location.href));

  const { scrollDirection } = useScrollDirection();
  const { isThresholdReached } = useScrollThreshold(100);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  return (
    <header
      className={`py-3 w-full bg-white relative ${
        scrollDirection === "up" && isThresholdReached
          ? "sticky top-0 z-50"
          : ""
      }`}
    >
      <div className="flex justify-between text-xl font-medium container mx-auto px-5 sm:px-0">
        <div className="flex">
          <a href={translatePath("/")} className="mr-10">
            <img src="/logo.svg" width="64" height="56" alt="logo" />
          </a>
          <ul className="hidden lg:flex items-center gap-6">
            {navlinks.map((link) => (
              <li
                key={link.label}
                className={`${
                  window.location.pathname.endsWith(link.path)
                    ? "text-main"
                    : "cursor-pointer"
                }`}
              >
                <a
                  className={`${
                    window.location.pathname.endsWith(link.path)
                      ? "pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  href={translatePath(`/${link.path}`)}
                >
                  {t(`nav.${link.path}` as NavItemType)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <LanguageDropDown />
          <MobileBurger />
          <button className="fixed bottom-7 left-1/2 z-40 -translate-x-1/2 sm:translate-x-0 sm:static rounded-xl py-4 px-5 text-white bg-main">
            {t("nav.book")}
          </button>
        </div>
      </div>
      <svg
        className="block sm:hidden absolute -bottom-3 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
        viewBox="0 0 384 20"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M384 19.1373C367.684 17.8999 355.563 15.5259 344.28 13.3139C330.24 10.3888 319.44 8.29941 300 8.29941C281.981 8.29941 270.714 10.4509 257.441 12.9856L254.029 13.6372C238.277 16.6511 220.775 20 192 20C162.383 20 144.707 16.5346 128.591 13.3749L128.28 13.3139C114.24 10.3888 103.008 8.29941 84 8.29941C65.2411 8.29941 54.0555 10.4972 40.2703 13.2058L39.72 13.3139L38.9656 13.458C27.9309 15.5652 15.8411 17.874 0 19.1065V0H384V19.1373Z"
          fill="white"
        />
      </svg>
      <svg
        className="hidden sm:block absolute -bottom-3 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
        viewBox="0 0 1512 20"
        fill="none"
      >
        <path
          d="M44.28 13.3139C30.24 10.3888 19.44 8.29941 0 8.29941V0H1512V8.29941C1493.24 8.29941 1482.06 10.4972 1468.27 13.2057L1467.72 13.3139L1466.97 13.4579C1450.95 16.5167 1432.71 20 1404 20C1374.41 20 1356.48 16.4898 1340.28 13.3139C1326.24 10.3888 1315.44 8.29941 1296 8.29941C1277.21 8.29941 1265.76 10.6395 1251.72 13.3139C1235.52 16.4062 1217.81 20 1188 20C1158.38 20 1140.71 16.5346 1124.59 13.3749L1124.28 13.3139C1110.24 10.3888 1099.01 8.29941 1080 8.29941C1061.24 8.29941 1050.06 10.4972 1036.27 13.2057L1035.72 13.3139L1034.97 13.4579C1018.95 16.5167 1000.71 20 972 20C942.408 20 924.48 16.4898 908.28 13.3139C894.24 10.3888 883.44 8.29941 864 8.29941C845.208 8.29941 833.76 10.6395 819.72 13.3139C803.52 16.4062 785.808 20 756 20C726.383 20 708.707 16.5346 692.591 13.3749L692.28 13.3139C678.24 10.3888 667.008 8.29941 648 8.29941C629.241 8.29941 618.056 10.4972 604.27 13.2058L603.72 13.3139L602.966 13.458C586.949 16.5167 568.708 20 540 20C510.408 20 492.48 16.4898 476.28 13.3139C462.24 10.3888 451.44 8.29941 432 8.29941C413.208 8.29941 401.76 10.6395 387.72 13.3139C371.52 16.4062 353.808 20 324 20C294.383 20 276.707 16.5346 260.591 13.3749L260.28 13.3139C246.24 10.3888 235.008 8.29941 216 8.29941C197.241 8.29941 186.056 10.4972 172.271 13.2057L171.72 13.3139L170.966 13.4579C154.949 16.5167 136.708 20 108 20C78.408 20 60.48 16.4898 44.28 13.3139Z"
          fill="white"
        />
      </svg>
    </header>
  );
};

export default Header;
