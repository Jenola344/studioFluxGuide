'use server';

/**
 * @fileOverview An AI agent that explains DeFi concepts.
 *
 * - explainDeFiConcept - A function that takes a DeFi concept and returns a plain-English explanation.
 * - ExplainDeFiConceptInput - The input type for the explainDeFiConcept function.
 * - ExplainDeFiConceptOutput - The return type for the explainDeFiConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainDeFiConceptInputSchema = z.object({
  concept: z
    .string()
    .describe('The DeFi concept to explain (e.g., Impermanent Loss, APY).'),
});
export type ExplainDeFiConceptInput = z.infer<typeof ExplainDeFiConceptInputSchema>;

const ExplainDeFiConceptOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A plain-English explanation of the DeFi concept.'),
});
export type ExplainDeFiConceptOutput = z.infer<typeof ExplainDeFiConceptOutputSchema>;

export async function explainDeFiConcept(input: ExplainDeFiConceptInput): Promise<ExplainDeFiConceptOutput> {
  return explainDeFiConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainDeFiConceptPrompt',
  input: {schema: ExplainDeFiConceptInputSchema},
  output: {schema: ExplainDeFiConceptOutputSchema},
  prompt: `You are a helpful assistant that explains decentralized finance (DeFi) concepts in plain English.

  Explain the following concept:
  {{concept}}`,
});

const explainDeFiConceptFlow = ai.defineFlow(
  {
    name: 'explainDeFiConceptFlow',
    inputSchema: ExplainDeFiConceptInputSchema,
    outputSchema: ExplainDeFiConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
