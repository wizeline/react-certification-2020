import React from 'react'
import CardList from '../components/CardList/CardList'
import withAuth from '../utils/withAuth'

const favorites = () => {
    return (
        <CardList favorite={true} />
    )
}

export default withAuth(favorites)
