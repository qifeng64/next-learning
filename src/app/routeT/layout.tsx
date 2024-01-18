"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Layout({ children, left, right }: { children: React.ReactNode; left: React.ReactNode; right: React.ReactNode }) {
    const router = useRouter();
    return (
        <>
            {left}
            {right}
            <Button type="primary" onClick={() => router.push("/routeT/settings")}>
                去往/routeT/settings
            </Button>
        </>
    );
}
