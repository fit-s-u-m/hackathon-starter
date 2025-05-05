import { pay } from "@/lib/payment/chapa"
import { Button } from "../ui/button"

export default function TestPay() {
	return (
		<Button className="pointer" onClick={() => { pay(10, { first_name: "test first name", last_name: "test last name", phone_number: "0913312991", email: "test@gmail.com" }, "http://localhost:3000") }}>
			Pay 10 buks
		</Button>
	)

}
