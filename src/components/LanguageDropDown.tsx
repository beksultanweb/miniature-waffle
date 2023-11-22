import { useState } from "react"
import { languages } from '../i18n/ui';
import { getLangFromUrl, useTranslatedPath, useTranslations } from "../i18n/utils";

const LanguageDropDown = () => {
    const [open, setOpen] = useState(false)

    const lang = getLangFromUrl(new URL(window.location.href))
    const translatePath = useTranslatedPath(lang);
    const t = useTranslations(lang)

    const toggle = (() => setOpen(!open))

    return (
        <div className="relative" onClick={toggle}>
            <div className="flex gap-1 cursor-pointer">
                <img src="/arrow-down.svg" alt="arrow"/>
                <span className="text-main">{languages[lang]}</span>
            </div>
            {open && <div className="absolute top-8 right-0 z-20 bg-white shadow py-4 px-5 rounded-xl text-main flex flex-col gap-4">
            {Object.entries(languages).map(([lang, label]) => (
                <a key={label} href={translatePath('/', lang)} className="cursor-pointer uppercase">{label}</a>
            ))}
            </div>}
        </div>
    )
}

export default LanguageDropDown