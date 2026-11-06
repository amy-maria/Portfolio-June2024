import { TechnicalStack } from './technicalstack';


export default function About() {
  return (
    <div className='px-8 max-w-7xl mx-auto'>
      <div className='mb-12 text-white text-lg leading-relaxed'>
        <p>
          Before writing code, I spent 25 years in clinical laboratories as a Medical Technologist, Transfusion Medicine Supervisor, and Laboratory Manager. Working with LIS/HIS platforms, middleware, and instrument interfaces showed me how critical software is to patient care. It is a big part of why I moved into software development. </p>
          <p className='mt-4'>Today, I build and test applications with React, Next.js, TypeScript, Python and C#. I also write automated tests for my projects before shipping. My recent project, HealthHub, builds on my laboratory experience with interfaces: it receives HL7 messages, validates them, and converts them into FHIR resources. </p>
         <p className='mt-4'> I am looking for roles where clinical knowledge and code meet: Healthcare IT, Full-Stack Development or Software QA.
        </p>
      </div>

      <h3 className='font-mono text-[12px] text-slate-400 tracking-widest uppercase mb-5'>
        Technical Stack
      </h3>
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
