import { useState } from "react";
import { affiliateDashboardStats } from "../../../../constants/AffiliateDashboardStats";
import { affiliateDashboardDoctors } from "../../../../constants/AffiliateDashboardDoctors";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { affiliateDashboardProducts } from "../../../../constants/AffiliateDashboardProducts";

const AffiliateDashboard = () => {
  const [activeTab, setActiveTab] = useState("month");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 px-16 py-4 w-full bg-[#FFFFFF] rounded-2xl justify-between">
        {["today", "week", "month", "custom"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-4 py-2 text-lg font-medium transition 
              ${activeTab === tab ? "text-[#3A643B] border-b-2" : "text-gray-600 hover:text-[#3A643B]"}`}
          >
            {tab === "today" && "Today So Far"}
            {tab === "week" && "Week So Far"}
            {tab === "month" && "Month So Far"}
            {tab === "custom" && "Custom"}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {affiliateDashboardStats.map((stat, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6 flex flex-col text-start">
            <h3 className="text-lg font-semibold mt-2 text-gray-600">{stat.label}</h3>
            <div className="flex flex-row my-6 items-center gap-4">
              <div className="bg-[#FDF8E5] border-[#E3E3E3] border-2 p-2 flex items-center justify-center rounded-2xl">
                <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
              </div>
              <p className="text-3xl font-semibold text-[#3A643B]">{stat.value}<span className="text-sm">/month</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Top Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Doctors */}
        <div className="">
          <h3 className="font-semibold mb-6">Top Affiliate Doctors</h3>
          <ul className="space-y-6 bg-[#FFFFFF] shadow p-4 rounded-2xl">
            {affiliateDashboardDoctors.map((doc, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <p className="font-medium">{i + 1}.</p>
                  <img src={doc.icon} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">{doc.field}</p>
                  </div>
                </div>
                <div className={`text-sm p-1 flex flex-row w-16 items-center justify-between px-2 rounded-md font-semibold ${doc.status === "up" ? "bg-[#ABE9CA] text-[#15C26B]" : "text-[#DD3131] bg-[#F3B5B5]"}`}>
                  {doc.status === "up" ? <ArrowUpIcon className="size-4" /> : <ArrowDownIcon className="size-4" />}
                  {doc.change}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="font-semibold mb-6">Top Affiliate Products</h3>
          <ul className="space-y-6 bg-[#FFFFFF] shadow p-4 rounded-2xl">
            {affiliateDashboardProducts.map((prod, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <p className="font-medium">{i + 1}.</p>
                  <img src={prod.icon} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-medium">{prod.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
