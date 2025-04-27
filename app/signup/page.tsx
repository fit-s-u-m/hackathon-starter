import { SignUpForm } from '@/components/login/signup-form'
import { GalleryVerticalEnd } from "lucide-react"


export default function SignUPPage() {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10 h-full">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Hackathon starter
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

