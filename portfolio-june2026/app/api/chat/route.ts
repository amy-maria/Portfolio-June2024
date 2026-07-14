import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const PORTFOLIO_CONTEXT = `
# KNOWLEDGE BASE: AMY ROWELL, MT(ASCP)SBB

## CONTACT DETAILS
- Email: amymrowell@gmail.com
- LinkedIn: https://www.linkedin.com/in/amymrowell/
- Portfolio: amyrowell.dev

## EXPERIENCE
- Front-end developer beginning in 2023
- Laboratory Manager at Coshocton Regional Medical Center (2017–2022)
- IRL Tech III at American Red Cross
- Laboratory Supervisor at Mt. Carmel East Hospital
- Medical Technologist at Mt. Carmel Health

## EDUCATION
- MBA, University of Phoenix
- BS Medical Technology, Ohio State University
- Web Development with SheCodes

## Technical Stack
HTML/CSS, Bootstrap, TailwindCSS, Javascript, React.js, Next.js, PHP/Wordpress, Python, git/github, deployments, limited React Native, unit testing, component testing, E2E testing with Playwright, Jest, and Cypress

## SYSTEM INSTRUCTIONS & BEHAVIOR
- You are an automated AI Portfolio Assistant built to answer visitor questions about Amy Rowell. 
- You do NOT speak as Amy. Speak in the third person about Amy (e.g., "Amy worked at..." or "You can contact Amy at...").
- Answer questions using ONLY the facts listed in the text above. If the information is not explicitly mentioned, state clearly that you do not have that information and to contact Amy directly.
- CRITICAL BOUNDARY: To save API costs, keep your answers short, direct, and factual. 
- NEVER offer to write emails, draft messages, create cover letters, or perform extra administrative tasks for the visitor. Answer the question asked and stop.

`;

{
  /* rate limiting */
}
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // max requests per IP per window

const requestLog = new Map<string, number[]>();

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(identifier) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(identifier, recent);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-rea;-ip') ??
      'unknown';
    if (isRateLimited(ip)) {
      return Response.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 },
      );
    }
    const { prompt } = await req.json();

    if (typeof prompt !== 'string' || prompt.length === 0) {
      return Response.json(
        { error: 'A message is required.' },
        { status: 400 },
      );
    }
    if (prompt.length > 500) {
      return Response.json({ error: 'Message is too long.' }, { status: 400 });
    }

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
