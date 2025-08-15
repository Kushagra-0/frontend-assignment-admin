import { Link } from "react-router-dom"
import logoSymbol from "../../assets/logos/logoSymbol.png"
import logoText from "../../assets/logos/logoText.png"
import barIcon from "../../assets/icons/navabar/bar-icon.png"
import searchNormal from "../../assets/icons/navabar/search-normal.png"
import settingIcon from "../../assets/icons/navabar/setting-icon-01.png"
import profile from "../../assets/icons/navabar/profile.jpg"
import noteIcon1 from "../../assets/icons/navabar/note-icon-01.png";
import noteIcon2 from "../../assets/icons/navabar/note-icon-02.png"

const NavBar = ({ togglePanel }: any) => {
    return (
        <div className="bg-[#FFFFFF] text-white px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <Link to="/" className="flex items-center">
                    <img src={logoSymbol} alt="Logo" className="h-10 w-auto" />
                    <img src={logoText} alt="Logo" className="h-10 w-auto" />

                </Link>
                <button onClick={togglePanel}>
                    <img src={barIcon} alt="Menu" className="h-4 w-auto" />
                </button>
                <div className="flex items-center bg-[#F5F5F6] rounded-md px-3 py-2">
                    <img src={searchNormal} alt="Search Icon" className="w-4 h-4 mr-2" />
                    <input
                        type="text"
                        placeholder="Search here"
                        className="flex-1 bg-transparent outline-none text-sm poppins-medium placeholder-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF]"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <img src={noteIcon2} alt="Note Icon 1" className="h-6 w-auto" />
                    <span className="absolute top-0 right-0 block h-2 w-2 bg-[#BC0000] rounded-full"></span>
                </div>
                <div className="relative">
                    <img src={noteIcon1} alt="Note Icon 2" className="h-6 w-auto" />
                    <span className="absolute top-0 right-0 block h-2 w-2 bg-[#BC0000] rounded-full"></span>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <span className="text-[#3A643B] font-bold text-lg leading-tight">
                        Liam Michael
                    </span>
                    <span className="text-[#3A643B] font-normal text-sm leading-tight">
                        Admin
                    </span>
                </div>
                <img src={profile} alt="Logo" className="h-10 w-auto rounded-2xl" />
                <img src={settingIcon} alt="Logo" className="h-6 w-auto" />
            </div>
        </div>
    )
}

export default NavBar