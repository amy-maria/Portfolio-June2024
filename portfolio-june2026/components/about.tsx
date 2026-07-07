import { TechnicalStack } from './technicalstack';


export default function About() {
  return (
    <div>
      {/* About */}
      <section id='about' className='py-32 px-8 max-w-7xl mx-auto'>
        <div className='mb-12'>
          <p className='text-gray-400 max-w-2xl text-sm leading-relaxed'>
            Before writing code, I spent [X years] in healthcare and clinical
            information systems (LIS/HIS) roles, along with end-user testing.
            That experience taught me how frustrating bad software can be for
            the people actually using it — and it is a big part of why I moved
            into development. Today I focus on front-end and full-stack work:
            React, Next.js, and Python/Django, with a growing interest in
            [wherever you want to specialize]. I care about writing code that is
            clean, accessible, and genuinely useful — not just technically
            correct.
          </p>
        </div>

        <h3 className='font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-5'>
          Technical Stack
        </h3>
        <div className='flex flex-wrap gap-3'>
          {TechnicalStack.map(({ id, skill }) => (
            <div
              key={id}
              className='font-mono text-xs text-[#e2e8f0] border border-gray-800 px-4 py-2 rounded-full bg-gray-900/30'>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
