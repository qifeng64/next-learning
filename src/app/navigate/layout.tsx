"use client";

import { usePathname } from "next/navigation";

export default function NavigateLayout({ children }: { children: React.ReactNode }) {
    // 获取当前活动路由
    // usePathname 只能在客户端组件中使用
    const currentPathname = usePathname();
    // console.log(currentPathname);
    return (
        <>
            <div>Navigate Layout</div>
            {children}
        </>
    );
}
