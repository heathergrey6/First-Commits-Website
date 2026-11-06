// Make.com webhook shared by all site forms. The `form` field tells the scenario's
// router which branch to run: applications email community@, log to the CRM sheet,
// and post to Slack; sponsor inquiries email community@ and log to the CRM sheet.
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/79r4dmjd9qouki92vce958v34ck88acr'

export type FormName = 'apply' | 'sponsors'

export async function submitToMake(
  form: FormName,
  fields: Record<string, string>
): Promise<boolean> {
  const response = await fetch(MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...fields, form }),
  })
  return response.ok
}
