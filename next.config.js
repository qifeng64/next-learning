/** @type {import('next').NextConfig} */
const nextConfig = {
    // 打包后的文件目录，默认是 .next
    distDir: "www",
    // 环境变量，在代码使用 process.env.customKey，构建后会被转换为 my-value
    env: {
        customKey: "my-value",
    },
    // 构建时，忽略 eslint 报错（不建议，除非已设置 eslint 为单独的工作流，如ci或提交钩子）
    eslint: {
        ignoreDuringBuilds: true,
    },
    // 构建时，忽略 typescript 报错
    typescript: {
        ignoreBuildErrors: true,
    },
    // 构建后移除所有 console语句（除 error 以外）
    compiler: {
        removeConsole: {
            exclude: ["error"],
        },
    },
    // 重定向 permanent-true 308永久重定向；307临时重定向——可保留原来的请求方法
    // async redirects() {
    //     return [
    //         {
    //             source: "/about",
    //             destination: "/",
    //             permanent: true,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
