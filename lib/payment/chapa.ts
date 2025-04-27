import axios from 'axios'

type chapaInfoType = {
  email: string,
  first_name: string,
  last_name: string,
  phone_number: string
}
type chapaCusomizationType = {
  title: string,
  description: string
}
export async function pay(amount: number, info: chapaInfoType, returnUrl: string, custom?: chapaCusomizationType) {
  const raw = {
    amount,
    ...info,
    return_url: returnUrl,
    customization: custom,
    meta: {
      hide_receipt: true
    },
    tx_ref: Date.now().toString(),
    callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    currency: "ETB",
  };
  const { data } = await axios.post('/api/pay', raw)

  console.log(data)
  if (data && data.data && data.data.checkout_url) {
    window.location.href = data.data.checkout_url
  } else {
    console.error('No checkout URL received', data)
  }
}
