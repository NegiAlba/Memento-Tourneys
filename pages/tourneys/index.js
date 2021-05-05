import  Link  from 'next/link'
import Head from 'next/head'
import Layout from '@/components/layout'

export default function index() {
    return (
        <Layout>
            <Head>
                <title>Page de tournois</title>
            </Head>
                <h1>Tournois random</h1>
        </Layout>
    )
}
