import { ChangeEvent, useEffect, useState } from 'react'

export default function Home() {
  const [otp, setOtp] = useState<string>('')

  useEffect(() => {
    const readOtp = async () => {
      const credentials = await navigator.credentials.get({
        otp: { transport: ['sms'] },
      })

      setOtp(credentials?.code || '')
    }

    readOtp()
  }, [])

  return (
    <form>
      <input
        type='text'
        autoComplete='one-time-code'
        required
        value={otp}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}
      />
      <input type='submit' />
    </form>
  )
}
