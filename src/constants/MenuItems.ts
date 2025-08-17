import menuIcon1 from "../assets/icons/sidebar/menu-icon-01.png"
import menuIcon2 from "../assets/icons/sidebar/menu-icon-02.png"
import menuIcon3 from "../assets/icons/sidebar/menu-icon-03.png"
import menuIcon4 from "../assets/icons/sidebar/menu-icon-04.png"
import menuIcon6 from "../assets/icons/sidebar/menu-icon-06.png"
import menuIcon7 from "../assets/icons/sidebar/menu-icon-07.png"
import menuIcon9 from "../assets/icons/sidebar/menu-icon-09.png"
import menuIcon10 from "../assets/icons/sidebar/menu-icon-10.png"


export const menuItems = [
    { 
        key: "dashboard", 
        label: "Dashboard", 
        icon: menuIcon1 
    },
    { 
        key: "doctors", 
        label: "Doctors", 
        icon: menuIcon2 
    },
    { 
        key: "patients", 
        label: "Patients", 
        icon: menuIcon3 
    },
    { 
        key: "appointments", 
        label: "Appointments", 
        icon: menuIcon4 
    },
    { 
        key: "speciality", 
        label: "Speciality", 
        icon: menuIcon6 
    },
    { 
        key: "coupons", 
        label: "Coupons", 
        icon: menuIcon7 
    },
    { 
        key: "concerns", 
        label: "Concerns", 
        icon: menuIcon9 
    },
    { 
        key: "referral", 
        label: "Referral", 
        icon: menuIcon10 
    },
    { 
        key: "affiliate", 
        label: "Affiliate", 
        icon: menuIcon10, 
        subItems: [
            { 
                key: "affiliate-dashboard", 
                label: "Dashboard",
                parent: "affiliate",
            },
            { 
                key: "affiliate-commission", 
                label: "Commission",
                parent: "affiliate",
            },
            { 
                key: "affiliate-coupons", 
                label: "Coupons",
                parent: "affiliate",
            },
             { 
                key: "affiliate-payments", 
                label: "Payments",
                subItems: [
                    { 
                        key: "affiliate-payment-pending", 
                        label: "Payment Pending",
                        parent: "affiliate-payments"
                    },
                    { 
                        key: "affiliate-payments-history", 
                        label: "Payment History",
                        parent: "affiliate-payments"
                    },
                ], 
            },
            { 
                key: "sales", 
                label: "Sales" 
            },
            { 
                key: "affiliate-doctors", 
                label: "Doctors" 
            },
        ]
    }
];