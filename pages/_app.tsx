import ErrorBoundary from '@/components/ErrorBoundary'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// ErrorBoundary
export default function App({ Component, pageProps }: AppProps) {
  return( 
  <ErrorBoundary>

    <Component {...pageProps} />
  </ErrorBoundary>
  )
}
