import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
	const body = await req.json()

	try {
		const response = await axios.post("https://api.chapa.co/v1/transaction/initialize", body, {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHAPA_SECRET_KEY}`,
				'Content-Type': 'application/json'
			}
		})

		return NextResponse.json(response.data)
	} catch (error: any) {
		console.error('Payment error:', error.response?.data || error.message)
		return NextResponse.json({ error: error.response?.data || error.message }, { status: 500 })
	}
}

