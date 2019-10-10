import React from 'react'

import ItemBlock from '../ItemBlock'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            collections: [
                {
                    title: 'Totem',
                    imageUrl: 'https://i.pinimg.com/564x/ae/25/00/ae2500c0259e319c6fe38e357596e342.jpg',
<<<<<<< HEAD
                    id: 1,
                    link: 'Totem'
=======
                    id: 1
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Pirate',
                    imageUrl: 'https://i.pinimg.com/564x/95/f2/de/95f2de9a3b2ff275087fac8d4a1e2b61.jpg',
<<<<<<< HEAD
                    id: 2,
                    link: 'Pirate'
=======
                    id: 2
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Murloc',
                    imageUrl: 'https://i.pinimg.com/564x/83/e6/cf/83e6cfe8b7025b005cbd964b79bd6baf.jpg',
<<<<<<< HEAD
                    id: 3,
                    link: 'Murloc'
=======
                    id: 3
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Mech',
                    imageUrl: 'https://i.pinimg.com/564x/00/79/b7/0079b7292c2c2650928c51bb3c944370.jpg',
<<<<<<< HEAD
                    id: 4,
                    link: 'Mech'
=======
                    id: 4
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Elemental',
                    imageUrl: 'https://i.pinimg.com/564x/11/d8/16/11d816f1e36faf88ed7cc1061d1fa180.jpg',
<<<<<<< HEAD
                    id: 5,
                    link: 'Elemental'
=======
                    id: 5
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Demon',
                    imageUrl: 'https://i.pinimg.com/564x/e7/e5/d2/e7e5d2f96eacf7a5d0b4f405e227841b.jpg',
<<<<<<< HEAD
                    id: 6,
                    link: 'Demon'
=======
                    id: 6
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Dragon',
                    imageUrl: 'https://i.pinimg.com/564x/d8/8d/e7/d88de7cef09c312c8debc03c8a436c48.jpg',
<<<<<<< HEAD
                    id: 7,
                    link: 'Dragon'
=======
                    id: 7
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
                {
                    title: 'Beast',
                    imageUrl: 'https://i.pinimg.com/564x/1f/06/19/1f06190cf4d256496079a4e3206ba95a.jpg',
                    id: 8,
<<<<<<< HEAD
                    link: 'Beast'
                    
=======
                    route: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/Beast'
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c

                },
            ]
        }
    }

    render() {
        return(
            <div className="HomePage__directory">
                {
<<<<<<< HEAD
                    this.state.collections.map(({title, imageUrl, id, link }) => (
                        <ItemBlock key={id} title={title} imageUrl={imageUrl} link={link}/>
=======
                    this.state.collections.map(({title, imageUrl, id, route}) => (
                        <ItemBlock key={id} title={title} imageUrl={imageUrl} route={route}/>
>>>>>>> 03a3bac4e7e912173265395374f671c3eed5b69c
                    ))
                }
            </div>
            
        )
    }
}

export default Directory