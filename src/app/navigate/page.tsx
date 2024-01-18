"use client";

import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <>
            <div>路由导航的三种方式（⭐表示推荐）</div>
            {/* #id 跳转并滚动到指定内容 */}
            <Link href="/navigate/link#targetID" className="border-solid border-2 border-indigo-600 mr-4">
                link⭐
            </Link>
            <Button type="primary" className="mr-4" onClick={() => router.push("/navigate/useRouter")}>
                useRouter
            </Button>
            <div>
                第三种:
                <ul>
                    <li>window.history.pushState</li>
                    <li>window.history.replaceState</li>
                </ul>
            </div>
        </>
    );
}
