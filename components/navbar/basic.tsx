import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import LoginLogOutButton from '@/components/login/login-logout-button'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { pay } from '@/lib/payment/chapa'

export default async function NavBar() {
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()
	console.log(data)
	if (error || !data?.user) {
		redirect('/login')
	}
	const getFirst2Char = (name: string) => {
		const names = name.split(" ")
		const firstCharFirstName = names[0][0].toUpperCase()
		const firstCharLastName = names[1][0].toUpperCase()
		return firstCharFirstName + firstCharLastName
	}


	return (
		<div className="flex w-full justify-between p-5 items-center bg-background">
			<div className="left flex gap-3 items-center">
				{
					data.user.identities && data.user.identities[0].identity_data ? (
						<Avatar >
							<AvatarImage src={data.user?.identities[0]?.identity_data.avatar_url} alt="profile pic" className='bg-accent' />
							<AvatarFallback className='bg-accent'>{getFirst2Char(data.user.identities[0].identity_data.full_name)}</AvatarFallback>
						</Avatar>

					) : null
				}
				{
					data.user.identities && data.user.identities[0].identity_data
						? <p>{data.user.identities[0].identity_data.full_name}</p>
						: <p>{data.user.email}</p>
				}

			</div>
			<div className="middle">
			</div>
			<div className="end">
				<LoginLogOutButton />
			</div>

		</div>
	)
}
