import { useState } from "react";
import { menuItems } from "../../constants/MenuItems";
import MenuItem from "./MenuItems";
import AffiliateDashboard from "./tabs/affiliate/AffiliateDashboard";
import AffiliateCommission from "./tabs/affiliate/AffiliateCommission";
import Breadcrumb from "../common/Breadcrumb";


const Dashboard = ({ isPanelOpen }: any) => {
    const [activePanel, setActivePanel] = useState("dashboard");

    return (
        <div className="flex h-[calc(100vh-93px)] overflow-scroll-y">
            {/* Sidebar */}
            <div
                className={`bg-white fixed shadow-md p-4 mt-20 flex flex-col gap-4 rounded-tr-3xl transform transition-all duration-300 ease-in-out ${isPanelOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} w-64 max-h-[calc(100vh-64px)] overflow-y-auto`}
            >
                <div className="font-bold text-lg">Menu</div>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.key}
                        item={item}
                        activePanel={activePanel}
                        setActivePanel={setActivePanel}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div
                className={`transition-all duration-300 ease-in-out p-6 mt-16
                ${isPanelOpen ? "w-full pl-72" : "w-full"}`}
            >
                <Breadcrumb activePanel={activePanel} />
                {activePanel === "dashboard" && <DashboardMain />}
                {activePanel === "users" && <Users />}
                {activePanel === "settings" && <Settings />}
                {activePanel === "affiliate-dashboard" && <AffiliateDashboard />}
                {activePanel === "affiliate-commission" && <AffiliateCommission />}
                {activePanel === "commission-summary" && <h2>Commission Summary</h2>}
                {activePanel === "commission-reports" && <h2>Commission Reports</h2>}
                {activePanel === "affiliate-sales" && <h2>Affiliate Sales</h2>}
            </div>
        </div>
    );
};

export default Dashboard;

function DashboardMain() {
    return <h2 className="text-xl font-bold">Dashboard Content</h2>;
}
function Users() {
    return <h2 className="text-xl font-bold">Users Content</h2>;
}
function Settings() {
    return <h2 className="text-xl font-bold">Settings Content</h2>;
}
