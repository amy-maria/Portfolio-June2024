import {ImageResponse} from 'next/og';

export const alt = 'Amy Rowell: Healthcare IT, Full-stack Development, Software QA';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '80px',
                background: '#0e0d0b',
                color: '#e2e8f0',
            }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column'}}>
                <div style={{ 
                    fontSize: 76, 
                    fontWeight: 700, 
                    color: '#ffffff',
                }}>Amy Rowell</div>
                <div style={{
                    fontSize: 40, 
                    marginTop: 16,
                    color: '#60a5fa',}}>
                        Healthcare IT, Full-stack Development, Software QA
                </div>
            </div>
            <div style={{
                fontSize: 30,
                color: '#94a3b8',
            }}>
                React | Next.js | Python | C#/.NET | HL7/FHIR | QA
            </div>
            <div style={{ 
                fontSize: 28, 
                color: '#94a3b8'
            }}>amyrowell.dev </div>
            </div>
        ),
        {...size},
    );
}