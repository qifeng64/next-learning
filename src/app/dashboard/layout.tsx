import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2>Dashboard Layout</h2>
            {children}
        </>
    );
}
