'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function OAuthHandler() {
	const router = useRouter()

	useEffect(() => {
		const supabase = createClient()

		const getSession = async () => {
			const { data, error } = await supabase.auth.getSession()

			if (error) {
				console.error('Error getting session:', error)
				router.push('/error')
			} else if (data.session) {
				router.push('/')
			}
		}

		getSession()
	}, [router])

	return (
		<div className="flex min-h-screen items-center justify-center">
			<span>Loading...</span>
		</div>
	)
}

