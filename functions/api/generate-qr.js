import QRCode from 'qrcode'

export async function onRequestPost({ request }) {
  const { url } = await request.json()
  console.log({ url })
  const qrSVG = await QRCode.toString(url, {
    type: 'svg',
    color: {
      light: '#ffffff00',
      dark: '#155e75',
    },
  })

  return new Response(JSON.stringify({ url: qrSVG }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
