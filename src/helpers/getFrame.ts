import { Entry } from '@/models/Entry'
import { DocumentType } from '@typegoose/typegoose'
import env from '@/helpers/env'
import max255Char from '@/helpers/max255Char'

export default function (a: DocumentType<Entry>, b: DocumentType<Entry>) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="FramELO">
      <title>FramELO</title>

      <!-- Frame -->
      <meta property="fc:frame" content="vNext" />
      <meta property="og:image" content="${env.URL}/og.jpg" />
      <meta property="fc:frame:image" content="${env.URL}/${a._id}/${b._id}" />
      <meta property="fc:frame:button:1" content="${max255Char(a.title)}" />
      <meta property="fc:frame:button:2" content="${max255Char(b.title)}" />
      <meta property="fc:frame:post_url" content="${env.URL}/${a._id}/${b._id}" />

      <!-- Redirect -->
      <script>
        window
          .location
          .replace('https://warpcast.com/~/channel/framelo');
      </script>
    </head>
    
    <body>
      <h1>FramELO</h1>
      <h2>Because why the hell not?</h2>
    </body>
    
    </html>
    `
}
