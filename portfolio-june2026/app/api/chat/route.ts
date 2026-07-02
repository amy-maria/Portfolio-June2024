import { openai } from '@ai-sdk/openai' ;
import { streamText } from 'ai';


//backend chat route handler
export const maxDuration = 30;
//structured portfolio markdown
const PORTFOLIO_CONTEXT = `
# KNOWLEDGE BASE: AMY ROWELL, MT(ASCP)SBB
## CONTACT DETAILS FOR FALLBACK
- Email: amymrowell@gmail.com
- Phone: 614.657.3589
- LinkedIn: ://linkedin.com
- Portfolio: amyrowell.dev

## PROFESSIONAL EXPERIENCE
- Laboratory Manager at Coshocton Regional Medical Center (Jun 2017 - Jun 2022). Managed transition to hospital-owned lab. Administered SCC Soft LIS.
- IRL Tech III at American Red Cross. Specialist in Blood Bank handling complex serological cases and rare donor screening.
- Laboratory Supervisor at Mt. Carmel East Hospital. Managed Transfusion Services and Point of Care testing. Handled Cerner Blood Bank databases.
- Medical Technologist at Mt. Carmel Health. Generalist performing preventative maintenance, equipment validation, and internal audits.

## EDUCATION & CERTIFICATIONS
- MBA from University of Phoenix.
- BS in Medical Technology from The Ohio State University.
- Web Development Certification from SheCodes.
`;
 
export async function POST(req: Request) {
    const {messages}= await req.json();

    const response = await streamText({
    model: openai('gpt-4o-mini', {
      apiKey: process.env.AI_GATEWAY_API_KEY,
    }),
    messages,
    system: `You are an AI assistant representing Amy Rowell on her personal portfolio website. 
    Your primary goal is to answer questions about Amy using ONLY the provided Portfolio Context below.

    CRITICAL INSTRUCTIONS:
    1. Be professional, direct, polite, and helpful.
    2. If a visitor asks a question that CANNOT be answered strictly using the data in the Portfolio Context below, or if they ask to schedule an interview or request a formal PDF, you must politely inform them that you do not have that exact information on file and immediately direct them to contact Amy directly using her contact details.
    3. Do not invent details under any circumstance. Always default to providing her email (amymrowell@gmail.com) or LinkedIn profile when handling unknown requests.

    PORTFOLIO CONTEXT:
    ${PORTFOLIO_CONTEXT}`,
    });

    return response.toTextStreamResponse();
}