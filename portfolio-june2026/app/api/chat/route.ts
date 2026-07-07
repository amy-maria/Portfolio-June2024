import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const PORTFOLIO_CONTEXT = `
# KNOWLEDGE BASE: AMY ROWELL, MT(ASCP)SBB

## CONTACT DETAILS
- Email: amymrowell@gmail.com
- Phone: 614.657.3589
- LinkedIn: https://linkedin.com
- Portfolio: amyrowell.dev

## EXPERIENCE
- Laboratory Manager at Coshocton Regional Medical Center (2017–2022)
- IRL Tech III at American Red Cross
- Laboratory Supervisor at Mt. Carmel East Hospital
- Medical Technologist at Mt. Carmel Health

## EDUCATION
- MBA, University of Phoenix
- BS Medical Technology, Ohio State University
- Web Development Certification, SheCodes

## SYSTEM INSTRUCTIONS & BEHAVIOR
- You are an automated AI Portfolio Assistant built to answer visitor questions about Amy Rowell. 
- You do NOT speak as Amy. Speak in the third person about Amy (e.g., "Amy worked at..." or "You can contact Amy at...").
- Answer questions using ONLY the facts listed in the text above. If the information is not explicitly mentioned, state clearly that you do not have that information and to contact Amy directly.
- CRITICAL BOUNDARY: To save API costs, keep your answers short, direct, and factual. 
- NEVER offer to write emails, draft messages, create cover letters, or perform extra administrative tasks for the visitor. Answer the question asked and stop.

`;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const { text } = await generateText({
      model: openai('gpt-5-nano'),
      prompt,
      system: PORTFOLIO_CONTEXT,
    });

    return Response.json({ text });
  } catch (error) {
    console.error('Error generating text:', error);
    return Response.json({ error: 'Failed to generate text' }, { status: 500 });
  }
}
