import React from "react";

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h3>Dashboard Template</h3>
            {children}
        </>
    );
}
