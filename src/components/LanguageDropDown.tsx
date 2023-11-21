import { useState } from "react"
import { languages } from '../i18n/ui';
import { getLangFromUrl, useTranslatedPath } from "../i18n/utils";

const LanguageDropDown = () => {
    const [open, setOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState('РУС')

    const lang = getLangFromUrl(new URL(window.location.href))
    const translatePath = useTranslatedPath(lang);

    const toggle = (() => setOpen(!open))
    const handleLangChange = (lang: string) => {
        setCurrentLang(lang)
        window.location.href = translatePath('/', lang)
    }

    return (
        <div className="relative" onClick={toggle}>
            <div className="flex gap-1 cursor-pointer">
                <img src="/arrow-down.svg" alt="arrow"/>
                <span className="text-main">{currentLang}</span>
            </div>
            {open && <div className="absolute top-8 right-0 z-20 bg-white shadow py-4 px-5 rounded-xl text-main flex flex-col gap-4">
            {Object.entries(languages).map(([lang, label]) => (
                <span key={label} onClick={() => handleLangChange(lang)} className="cursor-pointer uppercase">{label}</span>
            ))}
            </div>}
        </div>
    )
}

export default LanguageDropDown