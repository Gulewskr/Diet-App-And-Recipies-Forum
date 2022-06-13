import { useMemo, useState } from 'react';
import {API_ADDRESS} from '../data/API_VARIABLES';
import { validationCommentForm } from '../data/Validation';
import {ProfileComp} from './index';

const ProductOnList = (props) => {
    
    const {_name, company, Kcal, Fat, Protein, Carbon } = useMemo(() => props.obj, []);
    return(
        <div class="card">
           <div class="card-content">
                <div className='columns'>
                    <div className='column'>{_name}</div>
                    <div className='column'>{company}</div>
                    <div className='column'>{Kcal}</div>
                    <div className='column'>{Fat}</div>
                    <div className='column'>{Protein}</div>
                    <div className='column'>{Carbon}</div>
                    <button class="delete"></button>
                </div>
            </div>
        </div>
    );
}

const NewProductForm = (props) => {

    const unit = ['ml', 'mg']
    const [unitV, setUnitV] = useState(0);

    const [_name, company, Kcal, Fat, Protein, Carbon ] = useMemo(() => ["serek wiejski", "pilos", 200, 4, 25, 13], []);

    return (
        <div className="comment">
            <div className='columns'>
                <div className='column'>Formularz nowego produktu</div>
            </div>
            <div> 
                <input class="input is-normal" type="text" placeholder="Nazwa"></input>
                <input class="input is-normal" type="text" placeholder="Firma"></input>
                <input class="input is-normal" type="number" placeholder="Kcal"></input>
                <input class="input is-normal" type="number" placeholder="Tłuszcz"></input>
                <input class="input is-normal" type="number" placeholder="Białko"></input>
                <input class="input is-normal" type="number" placeholder="Węglowodany"></input>
                <div> Jednostka
                    <div class="select is-primary">
                        <select>
                            <option>mg</option>
                            <option>ml</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Dodaj</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Anuluj</button>
            </div>
            </div>
        </div>
    );
}

const NewRecipeDietForm = (props) => {

    const unit = ['ml', 'mg']
    const [unitV, setUnitV] = useState(0);

    const [_name, company, Kcal, Fat, Protein, Carbon ] = useMemo(() => ["serek wiejski", "pilos", 200, 4, 25, 13], []);

    return (
        <div className="comment">
            <div>
                Dodaj kaloryczność przepisu
            </div>
            <div> 
                <input class="input is-normal" type="text" placeholder="Kcal"></input>
                <input class="input is-normal" type="text" placeholder="Tłuszcz"></input>
                <input class="input is-normal" type="text" placeholder="Białko"></input>
                <input class="input is-normal" type="text" placeholder="Węglowodany"></input>
                <div> Jednostka
                    <div class="select is-primary">
                        <select>
                            <option>mg</option>
                            <option>ml</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Dodaj</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Anuluj</button>
            </div>
            </div>
        </div>
    );
}

export { NewProductForm, ProductOnList, NewRecipeDietForm }