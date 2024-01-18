"use client";

export default function Page() {
    return (
        <>
            <div>Link Page</div>
            <div className="w-96 h-96 bg-inherit"></div>
            <div className="w-96 h-96 bg-current"></div>
            <div className="w-96 h-96 bg-red-700" id="targetID"></div>
        </>
    );
}
