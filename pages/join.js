import Router from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';

import initFirebase from './services/firebase';
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';

const provider = new firebase.auth.GoogleAuthProvider();

export default function Join() {

    initFirebase();
    const [authorizing, setAuthorizing] = useState(false);


    const handleAuthentication = async () => {
        setAuthorizing(true);
        try{
            const result = await firebase.auth().signInWithPopup(provider);

            const {user, credentials} = result;

            console.log({user,credentials});
            if(!user){
                throw new Error('There was an issue with your authentication');
            }
            Router.push('/');
            setAuthorizing(false)
        } catch (e) {
            return console.log(e);
        }
    }

    return (

        <Layout>
            <Head>
                <title>Join the {siteTitle}</title>
            </Head>
            <h2>Bienvenue sur la page join !</h2>
            <button onClick={handleAuthentication} loading={authorizing ? "Signing-in" : undefined}>Get Started !</button>
        </Layout>
    )
    
};

