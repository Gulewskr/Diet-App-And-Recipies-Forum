import { useState } from 'react';
import {API_ADDRESS} from '../data/API_VARIABLES';
import { validationCommentForm } from '../data/Validation';
import {ProfileComp , ProductOnList, NewProductForm} from './index';

const DietDay = (props) => {
    const {id, id_recipe, id_user, user, text, editable, token, callback} = props;


    const day = 13;
    const month = 6;
    const year = 2022;

    const Kcal = props.kcal ? props.kcal : 2000;
    const Fat = props.fat ? props.fat : 100;
    const Protein = props.protein ? props.protein : 200;
    const Carbon = props.carbon ? props.carbon : 200;

    //lista produktów z bazy
    //const ProductList =
    const [adding, setAddNew] = useState(false);

    const ProductList = [
        {_name: "serek wiejski", company: "pilos", Kcal: 200, Fat: 4, Protein: 25, Carbon: 13},
        {_name: "serek wiejski", company: "pilos", Kcal: 200, Fat: 4, Protein: 25, Carbon: 13},
        {_name: "serek wiejski", company: "pilos", Kcal: 200, Fat: 4, Protein: 25, Carbon: 13}
    ]
    //P

    return (
        <div className="comment">
            <div>
                Podsumowanie dnia:  <b>{day}.{month}.{year}</b>
            </div>
            <div className='columns'>
                <div className='column'>Kcal: {ProductList.reduce((t, val) => t + val.Kcal , 0)}/{Kcal.toFixed(2)}</div>
                <div className='column'>Tłuszcz: {ProductList.reduce((t, val) => t + val.Fat , 0)}/{Fat.toFixed(2)}</div>
                <div className='column'>Białko: {ProductList.reduce((t, val) => t + val.Protein , 0)}/{Protein.toFixed(2)}</div>
                <div className='column'>Węglowodany: {ProductList.reduce((t, val) => t + val.Carbon , 0)}/{Carbon.toFixed(2)}</div>
            </div>
            <div>
                Lista produktów:
            </div>
            <div>
                {ProductList && ProductList.map(v => <ProductOnList obj={v} />)}
                <div class="buttons">
                    <button onClick={() => setAddNew(!adding)} class="button is-primary">Dodaj produkt +</button>
                </div>
            </div>
            {adding && <NewProductForm />}
        </div>
    );
}

export { DietDay }