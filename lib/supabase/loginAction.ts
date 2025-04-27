'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
	const supabase = await createClient()

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signInWithPassword(data)

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function loginWithGoogle() {
	const supabase = await createClient()
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			queryParams: {
				access_type: "offline",
				prompt: "consent",
			},
			redirectTo: 'http://localhost:3000/auth/callback',
		},
	})

	if (data.url) {
		redirect(data.url) // use the redirect API for your server framework
	}
	if (error) {
		redirect('/login')
	}
}

export async function signup(formData: FormData) {
	const supabase = await createClient()

	// type-casting here for convenience
	// in practice, you should validate your inputs

	const firstName = formData.get('first-name')
	const lastName = formData.get('last-name')
	const email = formData.get('email') as string
	const data = {
		email,
		password: formData.get('password') as string,
		options: {
			data: {
				full_name: `${firstName + " " + lastName}`,
				email,
			},
		},
	}

	const { error } = await supabase.auth.signUp(data)

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function signout() {
	const supabase = await createClient();
	const { error } = await supabase.auth.signOut()
	if (error) {
		console.log(error);
		redirect("/error");
	}

	redirect("/logout");
}
