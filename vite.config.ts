import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import { defineConfig } from 'vite'

import type { ServerOptions } from 'https'

const developmentCertificateName = 'localhost.pfx'

const httpsSettings: ServerOptions = {
  pfx: fs.readFileSync(developmentCertificateName),
  passphrase: '1908'
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: httpsSettings,
    port: 3000
  },
  plugins: [react()]
})
