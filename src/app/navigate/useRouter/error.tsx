"use client";

import { useEffect } from "react";
import { Button } from "antd";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <Button type="primary" onClick={() => reset()}>
                Try again
            </Button>
        </div>
    );
}
// 错误处理是捕获错误，而不是not-found
// 当页面中抛出错误时，会自动处理
