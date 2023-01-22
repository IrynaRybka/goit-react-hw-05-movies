import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {fetchMovieReviews} from '../api/fetchApi';
import { toast } from 'react-toastify';


export const Reviews = () => {
    const {movieId} = useParams();
    const [text, setText] = useState(null);

    console.log(text);

    useEffect(()=>{
        const fetchReviews = async () => {
            try{
                const data = await fetchMovieReviews(movieId)
                setText(data.results);
            } catch {
                toast.warn('Sorry, we don`t have any reviews yet.');
            }
        }
        fetchReviews();
    }, []);

    return (
        text && text.map(({ author, content, id, created_at}) => {
            let noTextReview = '';
            if(content) {
                noTextReview = content
            } else {
                noTextReview = 'No one has commented on this movie yet'
            }
            return(<div key={id}>
                <h3>{author}</h3>
                <p>{noTextReview}</p>
                <p>{created_at}</p>
            </div>)
        })
    )
}