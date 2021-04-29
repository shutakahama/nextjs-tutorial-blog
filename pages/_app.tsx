import '../styles/global.css'
import { AppProps } from 'next/app'

// @ts-ignore
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
