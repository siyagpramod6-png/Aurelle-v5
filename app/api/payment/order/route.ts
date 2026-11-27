import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) return NextResponse.json({ error: 'Payment gateway is not configured.' }, { status: 503 });
  try {
    const body = await request.json();
    const amount = Number(body.amount);
    // TODO: Replace client amount with a server-side price lookup from Supabase.
    if (!Number.isInteger(amount) || amount < 100) return NextResponse.json({ error: 'Invalid amount.' }, { status: 400 });
    const razorpay = new Razorpay({ key_id, key_secret });
    const order = await razorpay.orders.create({ amount, currency: 'INR', receipt: `aur_${Date.now()}` });
    return NextResponse.json({ id: order.id, amount: order.amount, currency: order.currency, key_id });
  } catch {
    return NextResponse.json({ error: 'Unable to create payment order.' }, { status: 500 });
  }
}
