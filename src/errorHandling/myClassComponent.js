
import React, { useEffect, useState } from 'react'
import { ProdunctFetchingError } from "../components/errors/ErroeBoundaryComponent";
import { fetchCardItems } from '../Fetchers/product';
import CardItem from '../components/CardItem';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return <ProdunctFetchingError error={this.state.error?.message || ""} />
        }

        return this.props.children;
    }
}


export const MyClassComponent = () => {
    const [cardItems, setCardItems] = useState([]);


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const items = await fetchCardItems();
                setCardItems(items)
            } catch (err) {
            }
        }
        fetchItems();
    }, [])
    return (


        <div className=' bg-cyan-200'>
            <div className=' flex flex-col justify-center items-center gap-2'>
                {cardItems.map((item) => {
                    return <CardItem key={item.id} item={item} />
                })}
            </div>
        </div>

    )
}

