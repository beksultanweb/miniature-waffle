import { useState } from "react"

const LanguageDropDown = () => {
    const [open, setOpen] = useState(false)

    const toggle = (() => setOpen(!open))

    return (
        <div className="relative" onClick={toggle}>
            <div className="flex gap-1 cursor-pointer">
                <img src="/arrow-down.svg" alt="arrow"/>
                <span className="text-main">РУС</span>
            </div>
            {open && <div className="absolute top-8 right-0 z-20 bg-white shadow py-4 px-5 rounded-xl text-main flex flex-col gap-4">
            <span>РУССКИЙ</span>
            <span>ҚАЗАҚ</span>
            <span>ENGLISH</span>
            </div>}
        </div>
    )
}

export default LanguageDropDown