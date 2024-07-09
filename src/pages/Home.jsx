import React from 'react'
import Row from '../components/Row'
import requests from '../api/request'
import Banner from '../components/Banner'

function Home() {
    return (
        <>
            <Banner fetchURL={requests.fetchTrending} />
            <Row title={'Top Rated'} fetchURL={requests.fetchTopRated} />
            <Row change={true} title={'Trending'} fetchURL={requests.fetchTrending} />
            <Row title={'Netflix Originals'} fetchURL={requests.fetchNetflixOriginals} />
            <Row title={'Horror Movies'} fetchURL={requests.fetchHorrorMovies} />
            <Row title={'Romance Movies'} fetchURL={requests.fetchRomanceMovies} />
            <Row title={'Documentries'} fetchURL={requests.fetchDocumentaries} />
            <Row title={'Comedy Movies'} fetchURL={requests.fetchComedyMovies} />
            <Row title={'Action Movies'} fetchURL={requests.fetchActionMovies} />
        </>
    )
}

export default Home