// Make.com webhooks. Each scenario emails community@, adds a row to a Google Sheet,
// and (for applications) posts to Slack.
export const MAKE_WEBHOOKS = {
  apply: 'https://hook.us2.make.com/79r4dmjd9qouki92vce958v34ck88acr',
  sponsors: 'YOUR_SPONSORS_MAKE_WEBHOOK_URL',
} as const

export async function submitToMake(
  webhook: keyof typeof MAKE_WEBHOOKS,
  fields: Record<string, string>
): Promise<boolean> {
  const response = await fetch(MAKE_WEBHOOKS[webhook], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  })
  return response.ok
}
