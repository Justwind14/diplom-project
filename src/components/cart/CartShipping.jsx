import React, {useState} from 'react';
import Inputs from "../UI/Inputs";
import Buttons from "../UI/Buttons";

const CartShipping = () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [postcode, setPostcode] = useState('');

    const submitShipping = (e) => {
        e.preventDefault();
        if (country !== '' && state !== '' && postcode !== '' ) {
            const newForm = {
                country,
                state,
                postcode,
            }
            setCountry('');
            setState('');
            setPostcode('');
            alert('Данные доставки приняты');
        }
        else alert('ЗАПОЛНИТЕ ВСЕ ПОЛЯ ВВОДА');
    }

    return (
        <div className="shipping">
            <form action="#">
                <h3 className="shipping__title">SHIPPING ADDRESS</h3>
                <label className="hidden" htmlFor="country">Country</label>
                <Inputs id="country" className="shipping__input" autoFocus type="text" name="country"
                        placeholder="Bangladesh" value={country}
                        onChange={e => setCountry(e.target.value)}
                />
                <label className="hidden" htmlFor="state">State</label>
                <Inputs id="state" className="shipping__input" type="text" name="state" placeholder="State"
                        value={state}
                        onChange={e => setState(e.target.value)}
                />
                <label className="hidden" htmlFor="postcode">Postcode</label>
                <Inputs id="postcode" className="shipping__input" type="text" name="postcode"
                        placeholder="Postcode / Zip" value={postcode}
                        onChange={e => setPostcode(e.target.value)}
                />
                <Buttons className="shipping__btn" type="submit"
                        onClick={submitShipping}
                >Get a quote</Buttons>
            </form>
        </div>
    );
};

export default CartShipping;