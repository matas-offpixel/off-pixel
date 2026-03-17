import { Resend } from 'resend';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {
    const data = await request.formData();

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const url = String(data.get('url') ?? '').trim();
    const budget = String(data.get('budget') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      return json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }

    if (!env.RESEND_API_KEY) {
      return json({ success: false, error: 'Server missing RESEND_API_KEY' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'Off Pixel <hello@offpixel.co.uk>',
      to: 'hello@offpixel.co.uk',
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
        <p><strong>Website / Instagram:</strong> ${escapeHtml(url || '—')}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || '—')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    return json({ success: true });
  } catch (error) {
    console.error('Contact form send failed:', error);
    return json({ success: false, error: 'Failed to send message.' }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
