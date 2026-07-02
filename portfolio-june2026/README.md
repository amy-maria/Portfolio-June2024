## 📋 Discovery & Design Phase

Before writing a single line of Tailwind CSS or Next.js layout logic, this project went through a formal Product Discovery and User Experience (UX) Architecture phase. This engineering process ensures the platform satisfies real-world business objectives and conforms to strict performance benchmarks.

### 1. The Project Brief
*   **Product Owner / Client**: Amy Rowell (Software Engineer)
*   **Target Stakeholders**: Technical Recruiters, Engineering Managers, and Tech Founders.
*   **Business Goal**: Architect a high-performance, responsive portfolio platform to display production-grade technical skills, dynamic URL routing, and fluid hardware-accelerated user interactions.
*   **Success Metrics (KPIs)**:
    *   **Core Web Vitals**: Achieve < 1.2s Largest Contentful Paint (LCP) by enforcing explicit image priority optimizations.
    *   **Interface Stability**: Maintain a Cumulative Layout Shift (CLS) of 0.00 by utilizing rigid flex/grid aspect-ratio boundaries.
    *   **Data Integrity**: Enforce strict DRY (Don't Repeat Yourself) guidelines by isolating presentation code from structural arrays.

### 2. User Personas & Core Workflows

#### 👤 Persona A: The Busy Engineering Manager
*   **Objective**: Quickly validate the candidate's core technical stack and review clean code implementation architecture.
*   **Optimized Workflow**: The interface features a scannable grid layout displaying project badges. Clicking a card initiates an instantaneous dynamic routing transition directly to the deep code case study without full browser page reloads.

#### 👤 Persona B: The Technical Recruiter
*   **Objective**: Instantly identify the geographical location, availability status, and primary method of contact.
*   **Optimized Workflow**: The header and footer contain persistent, highly visible global action items (a specialized structural "Hire Me" mail-to hook and tab-isolated social anchor maps) to streamline communication.

### 3. Low-Fidelity Layout Wireframes

To eliminate UI logic bugs and blueprint the responsive grid dimensions before touching code, the interface layout was structured according to this programmatic schematic map:

```text
+-----------------------------------------------------------------------------------+

|  [PORTFOLIO.]                                [Work] [Process] [About]  [HIRE ME]  |  <- Global Header
+-----------------------------------------------------------------------------------+

|                                                                                   |
|                               Welcome to Our Community                            |  <- Hero Segment
|                                                                                   |
+-----------------------------------------------------------------------------------+

|  [ WORK GALLERY GRID SECTION ]                                                    |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
|  | [Image Container]     | | [Image Container]     | | [Image Container]     |    |
|  |                       | |                       | |                       |    |
|  | Trip Planner          | | Data Extraction       | | Promptopia            |    |
|  | Python / AI           | | Python                | | Next.js / OAuth       |    |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
+-----------------------------------------------------------------------------------+

|  [ CERTIFICATES / EDUCATION GRID SECTION ]                                        |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
|  | [Image Container]     | | [Image Container]     | | [Image Container]     |    |
|  | Web Development       | | Introduction Python   | | Advanced Python       |    |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
+-----------------------------------------------------------------------------------+

|  [ ABOUT ME MODULE ]                                                              |
|  All about me. Career path and goals.                                             |
|  Technical Stack: [Py] [React] [Next.js] [TS] [Tailwind] [Node] [GraphQL]         |
+-----------------------------------------------------------------------------------+

|  (C) 2026 Amy Rowell                                          (Icon) (Icon) (Icon)|  <- Unified Footer Line
+-----------------------------------------------------------------------------------+
```

### 4. Technical Architecture Decisions

*   **Next.js 15 App Router**: Selected to leverage React Server Components (RSC). By executing parameter mapping and data matching on the server, client-side bundle sizes are minimized, and initial page hydration speeds are maximized.
*   **Dynamic Parameter Sub-routing**: Implemented using an asynchronous file-system folder architecture (`app/project/[id]/page.tsx`). This allows the system to seamlessly ingest URL parameters and map them against plain data objects without layout duplication.
*   **Unified Data Stores**: Data layers are isolated into explicit TypeScript structures (`data.ts` and `technicalstack.ts`). This guarantees that changes to project logs, descriptions, or tool icons cascade automatically throughout the layout nodes.
*   **Native Web View Transitions**: Integrated via `next-view-transitions` to capture layout states during route navigation, providing fluid visual continuity as a card image transforms smoothly into a full-bleed hero element.
## 🛠️ Technical Stack & Architectural Decisions

The architectural design of this platform is built on modern web development standards, balancing client-side runtime efficiency with server-side performance. Below is a structural analysis of the core package implementations and engineering trade-offs:

### 1. Next.js 15 (App Router) & React Server Components (RSC)
*   **Implementation**: Utilized for the core application wrapper and dynamic route views (`app/project/[id]/page.tsx`).
*   **Architectural Trade-Off**: By executing param mapping and asset lookups directly on the server, the client-side JavaScript engine bypasses the weight of heavy runtime lookups. This yields near-zero blocking time and optimized First Contentful Paint (FCP).

### 2. Next-View-Transitions & Native Web View Transitions API
*   **Implementation**: Embedded globally at the root shell layout (`app/layout.tsx`) utilizing the `ViewTransitions` context wrapper.
*   **Architectural Trade-Off**: Traditional page transition libraries rely on heavy React runtime animations that block user inputs. This package leverages the browser's native hardware-accelerated paint pipeline, capturing snapshot frames to fluidly morph card elements between routes with zero client-side engine lag.

### 3. Isolated Typescript Data Modeling (`data.ts`, `technicalstack.ts`)
*   **Implementation**: Decoupled core assets into type-safe data arrays using standard TypeScript interfaces (`export interface ProjectProps`).
*   **Architectural Trade-Off**: Separates presentation logic from business data. If project logs or icons change, the architecture requires zero modifications to visual components, keeping the codebase fully DRY (Don't Repeat Yourself) and ready to ingest external REST or GraphQL APIs in the future.

### 4. Highly Optimized Icon Bundling via React-Icons
*   **Implementation**: Utilized a dynamic lookup mapper helper component (`components/TechIcon.tsx`) powered by an internal switch statement engine.
*   **Architectural Trade-Off**: Storing raw JSX nodes inside configuration arrays defeats Next.js engine compilation optimizations. Storing icon names as plain text strings (`"FaReact"`) allows Next.js compiler pipelines to run **Tree Shaking**, cleanly discarding over 49,000 unused library assets and keeping final production bundle chunks minified.

---

## 🧪 Automated Testing Infrastructure (Playwright)

To ensure strict regression control and protect complex dynamic routing maps, this platform implements an End-to-End (E2E) automation testing layer utilizing **Playwright**.

### 1. Test Strategy & Coverage
The E2E test suite simulates genuine user navigation workflows to validate UI rendering and functional routing states across multiple headless engines (Chromium, Firefox, WebKit):
*   **Critical Route Assertion**: Confirms clicking on index gallery grid items successfully passes structural parameters, converting a `/` root request into a healthy `/project/[id]` status page without triggering 404 or 500 runtime faults.
*   **DOM Element Validation**: Asserts typography elements, optimized image dimensions, and action buttons load properly on the DOM inside specified timeout boundaries.

### 2. Test Configuration Blueprint (`tests/navigation.spec.ts`)
```typescript
import { test, expect } from '@playwright/test';

test.describe('Global Navigation & Dynamic Routing E2E Suite', () => {
  test('should execute fluid client-side navigation to project detail page', async ({ page }) => {
    // 1. Arrange: Boot navigation thread to local staging port
    await page.goto('http://localhost:3000/');

    // 2. Act: Select and trigger a user click event on a card module
    await page.click('text=Trip Planner');

    // 3. Assert: Verify the dynamic URL structure resolves perfectly
    await expect(page).toHaveURL('http://localhost:3000/project/1');

    // 4. Assert: Confirm proper heading text layout updates on the new viewport
    await expect(page.locator('h1')).toContainText('Trip Planner');
  });
});
```

### 3. Local Automation Command Map
Execute these command controls inside your terminal environment to handle verification workflows:

*   **Install Test Runners & Engine Binaries**:
    ```bash
    npm init playwright@latest
    ```
*   **Execute Headless Testing Engine**:
    ```bash
    npx playwright test
    ```
*   **Launch Live Visual Debugging UI**:
    ```bash
    npx playwright test --ui
    ```
