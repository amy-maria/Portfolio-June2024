'use client'

function handleClick() {
    window.open ('mailto:amymrowell@gmail.com?subject=Let%27s%20build%20something', '_blank', 'noopener,noreferrer');
}

export default function CTA() {
    return (
       <div className='mt-14 inline-block rounded-lg bg-black-200 px-8 py-2 font-medium text-white'>
            <h3 className='text-center text-2xl text-blue-600 mb-2'>
                We should build something together!
                </h3>
            <p>
                I am looking for a front-end , full-stack, or QA role where I can grow with a team.
                Do you have a project or an
            opening in mind? I would love to talk.
                </p>
                
                <span className=' flex items-center justify-center'>
                    <button onClick={handleClick} className='mt-4 inline-block rounded-lg bg-blue-700 px-6 py-2 font-medium text-white hover:bg-blue-800'>Contact Amy</button >
                </span>
        </div>
    );
}