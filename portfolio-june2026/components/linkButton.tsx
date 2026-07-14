'use client'


interface LinkButtonProps {
    url: string;
}
export default function LinkButton ({url}: LinkButtonProps) {
    function handleClick() {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
      <button
        onClick={handleClick}
        className='mt-4 inline-block rounded-lg bg-blue-700 px-6 py-2 font-medium  text-white hover:bg-blue-900'>
        View Full Project
      </button>
    );

}