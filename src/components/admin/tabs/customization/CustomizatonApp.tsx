import { ArrowDownTrayIcon, ArrowPathIcon, ArrowsUpDownIcon} from "@heroicons/react/16/solid";
import { useState } from "react";
import searchNormal from "../../../../assets/icons/navabar/search-normal.png"


const CustomizationApp = () => {
    const [activeTab, setActiveTab] = useState("faq");
    const [activeSubTab, setActiveSubTab] = useState("consumer")

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <div className="flex gap-4 px-16 py-4 w-full bg-[#FFFFFF] rounded-2xl ">
                {["banners", "perPageProduct", "ingredents", "faq"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`capitalize px-4 py-2 text-lg font-medium transition 
              ${activeTab === tab ? "text-[#3A643B] border-b-2" : "text-gray-600 hover:text-[#3A643B]"}`}
                    >
                        {tab === "banners" && "Banner"}
                        {tab === "perPageProduct" && "Per Page Product"}
                        {tab === "ingredents" && "Ingredents"}
                        {tab === "faq" && "FAQ"}
                    </button>
                ))}
            </div>

            {activeTab == "faq" &&
                <div className="flex gap-4 px-64 py-4 w-full bg-[#FFFFFF] rounded-2xl justify-between">
                    {["consumer", "doctor"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveSubTab(tab)}
                            className={`capitalize px-4 py-2 text-lg font-medium transition 
              ${activeSubTab === tab ? "text-[#3A643B] border-b-2" : "text-gray-600 hover:text-[#3A643B]"}`}
                        >
                            {tab === "consumer" && "Consumer"}
                            {tab === "doctor" && "Doctor"}
                        </button>
                    ))}
                </div>

            }

            {activeSubTab == "consumer" &&
                <div className="bg-white rounded-2xl shadow">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-6 items-cente">
                                <h3 className="text-lg font-medium text-gray-900">FAQ List</h3>
                                <div className="flex items-center bg-[#F5F5F6] rounded-xl px-3 py-2">
                                    <img src={searchNormal} alt="Search Icon" className="w-4 h-4 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="flex-1 bg-transparent outline-none text-sm poppins-medium placeholder-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF]"
                                    />
                                </div>
                                <div className="bg-[#F5F5F6] h-8.5 w-8.5 flex items-center justify-center rounded-lg">
                                    <ArrowPathIcon className="size-4 text-[#3A643B]" />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="bg-[#3A643B] text-white px-4 text-sm font-semibold flex items-center justify-center rounded-lg">
                                    Add New FAQ
                                </div>
                                <div className="bg-[#F5F5F6] h-8.5 w-8.5 flex items-center justify-center rounded-lg">
                                    <ArrowsUpDownIcon className="size-4 text-[#3A643B]" />
                                </div>
                                <div className="bg-[#F5F5F6] h-8.5 w-8.5 flex items-center justify-center rounded-lg">
                                    <ArrowDownTrayIcon className="size-5 text-[#3A643B]" />
                                </div>
                            </div>

                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between mt-6">
                            <span className="text-sm text-gray-500">Rows per page: 5</span>
                            <div className="flex items-center space-x-2">
                                <button className="p-1 text-gray-400 hover:text-gray-600">
                                    <span>&lt;</span>
                                </button>
                                <span className="px-3 py-1 border-gray-500 border rounded text-sm">1</span>
                                <button className="p-1 text-gray-400 hover:text-gray-600">
                                    <span>&gt;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CustomizationApp;
