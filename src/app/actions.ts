
"use server";

import { explainDeFiConcept as explainDeFiConceptFlow } from "@/ai/flows/defi-concept-explanation";
import type { ExplainDeFiConceptInput, ExplainDeFiConceptOutput } from "@/ai/flows/defi-concept-explanation";

export async function explainDeFiConcept(input: ExplainDeFiConceptInput): Promise<ExplainDeFiConceptOutput> {
    return explainDeFiConceptFlow(input);
}
