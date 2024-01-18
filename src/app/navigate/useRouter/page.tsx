"use client";

import { Button } from "antd";
import { useState } from "react";

export default function Page() {
    const [error, setError] = useState(false);
    return (
        <>
            <div>useRouter Page</div>
            {error ? (
                Error()
            ) : (
                <Button type="primary" danger onClick={() => setError(true)}>
                    抛出一个错误
                </Button>
            )}
        </>
    );
}
