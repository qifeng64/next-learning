import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Metadata } from "next";

// 路由组的 title 设置
// 若只是给首页设置 title 在 page 设置即可
// 其中 template 主要是为了给路由组中子路由设置，%s 代表子路由 title
export const metadata: Metadata = {
    title: {
        template: "%s | Next.js",
        default: "Next.js",
    },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AntdRegistry>
                    <div className="p-4">
                        <h1>Root Layout</h1>
                        {children}
                    </div>
                </AntdRegistry>
            </body>
        </html>
    );
}
