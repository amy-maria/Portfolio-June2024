'use client' 
import { ErrorInfo } from "next/error";
import { useEffect } from "react"

export default function Error({
    error,
    unstable_retry,
}: ErrorInfo ) {
    useEffect(() => {
        console.error(error);
    }, [error]);

 
        return (
            <div className='text-center text-white py-20'>
                <h2>Something went wrong!</h2>
                <button onClick={() => unstable_retry()} className='mt-4 underline'>Try again</button>
            </div>
        );
}