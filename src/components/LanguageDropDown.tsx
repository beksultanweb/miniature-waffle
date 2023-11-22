import { useState } from "react";

import { defaultLang, languages } from "../i18n/ui";
import { getLangFromUrl } from "../i18n/utils";

const LanguageDropDown = () => {
  const [open, setOpen] = useState(false);

  const lang = getLangFromUrl(new URL(window.location.href));

  const toggle = () => setOpen(!open);

  return (
    <div className="relative" onClick={toggle}>
      <div className="flex gap-1 cursor-pointer">
        <img src="/arrow-down.svg" width="20" height="28" alt="arrow" />
        <span className="text-main">{languages[lang]}</span>
      </div>
      {open && (
        <div className="absolute top-8 right-0 z-20 bg-white shadow py-4 px-5 rounded-xl text-main flex flex-col gap-4">
          {Object.entries(languages).map(([lang, label]) => (
            <a
              key={label}
              href={`${defaultLang !== lang ? `/${lang}/` : "/"}`}
              className="cursor-pointer uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropDown;
