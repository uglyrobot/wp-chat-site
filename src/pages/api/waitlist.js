export default async function handler(req, res) {
  try {
    const { email } = req.body
    const response = await fetch('https://track.bentonow.com/forms/a72c79ffb06a248333be6e1de58f63cf/$subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    if (response.ok) {
      const data = await response.json()
      return res.status(200).json(data)
    } else {
      try {
        const data = await response.json()
        return res.status(response.status).json(data)
      } catch (e) {
        return res.status(response.status).end({ message: 'Error subscribing to waitlist' })
      }
    }

  } catch (error) {
    return res.status(500).end()
  }
}
