import { TechnicalStack } from './technicalstack';


export default function About() {
  return (
    <div className='px-8 max-w-7xl mx-auto'>
      <div className='mb-12'>
        <p className='text-white text-sm leading-relaxed'>
          Before writing code, I spent several years in the Clinical Laboratory.
          I enjoyed learning and working in various clinical information systems
          (LIS/HIS) roles. That experience taught me how frustrating bad
          software can be for the people actually using it. It is a big part of
          why I moved into development. Today, I focus on front-end and
          full-stack work: React, Next.js, and Python with a growing interest in
          QA. I care about writing code that is clean, accessible, responsive
          and genuinely useful.
        </p>
      </div>

      <h2 className='font-mono text-[12px] text-muted-foreground tracking-widest uppercase mb-5'>
        Technical Stack
      </h2>
      <div className='flex flex-wrap gap-3'>
        {TechnicalStack.map(({ id, skill }) => (
          <div
            key={id}
            className='font-mono text-xs text-[#e2e8f0] border border-gray-300 px-4 py-2 rounded-full bg-gray-900'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
