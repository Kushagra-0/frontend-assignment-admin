import NavBar from "../components/common/NavBar"
import Dashboard from "../components/admin/Dashboard"
import { useState } from "react";

const Admin = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(true);

    const togglePanel = () => {
        setIsPanelOpen((prev) => !prev);
    };

    return (
        <div className="bg-[#F5F5F6] min-h-screen">
            <NavBar togglePanel={togglePanel} />
            <Dashboard isPanelOpen={isPanelOpen} />
        </div>
    )
}

export default Admin