import Header from "../components/header";
import Footer from "../components/footer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCart } from "../store/actions";
import { useEffect, useState } from "react";
import { Promocodes } from "../data";
import { findItemInArray, removeItemFromArray } from "../utils";
import Background from "../components/background";


function CartPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(store => store.cartItems);

    const calculateTotalPrice = () => (cart.reduce((partialSum, a) => partialSum + a.price, 0));

    const device = useAppSelector(store => store.device);
    const [shipOption, setShipOption] = useState({service: 'SDEK', type: 'point'});
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
    const [promo, setPromo] = useState(1);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice() * promo);
    }, [cart, promo]);
    
    const handlePromoAppliance = () => {
        const userCode = (document.getElementById('promocode') as HTMLInputElement).value;
        const availableCode = Promocodes.filter(promocode => promocode.keyWord == userCode)
        if (availableCode.length == 1) {
            setPromo(availableCode[0].sale);
        }
    }

    const handleSizeChange = (target: HTMLSelectElement) => {
        const id = target.classList[0];
        const newItem = {...findItemInArray(id, cart)[0], selectedSize: target.value};
        const newCart = removeItemFromArray(id, cart);
        newCart.push(newItem);
        dispatch(setCart(newCart));
    }
    
    return (
        <>
            <Header />
            <section className="main__wrap cart__main" >
                <div className={(device)?"order__wrap":"order__wrap__pc"}>
                    <h2 className="order__header">CART</h2>
                    <div className="cart-item__list">
                        {
                        (cart.length != 0)
                        ?
                            cart.map(item => (
                                <article key={item.id}>
                                    <div className="cart-item" >
                                        <div className="item-cart__preview">
                                            <img src={'img/items/'+item.previewImages[0]}/>
                                        </div>
                                        <div className="item-left">
                                            <h3>{item.title}</h3>
                                            <div className="cart-size-selector__wrap">
                                                <label htmlFor={'size-select'+item.id}>Size</label>
                                                <select className = "size-select" name="drop-down" id={'size-select'+item.id} defaultValue={item.selectedSize} onChange={(evt) => handleSizeChange(evt.target)}>
                                                    {item.sizes.map(size => (
                                                        <option value={size} key={size} >{size}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="item-middle">{item.price}</div>
                                        <div className="item-right"><img src="img/cross.svg" width={'25vmin'} onClick={() => dispatch(setCart(removeItemFromArray(item.id, cart)))}/></div>
                                    </div>
                                    <span></span>
                                </article>
                            ))
                        :
                            <div className="empty-cart"><i>EMPTY</i></div>
                        }
                    </div>
                    <div className="order-total">
                        <div className="promocode__wrap">
                            <div className="promocode-input">
                                <h3>Promocode</h3>
                                <input type="text" name="promocode" id="promocode" minLength={4} maxLength={10} disabled={(promo != 1)}></input>
                            </div>
                            <button onClick={() => handlePromoAppliance()} disabled={(promo != 1)}>apply</button>
                        </div>
                        <div className="total__wrap">
                            <h2>Total:</h2>
                            <div className="total__price">{totalPrice}</div>
                        </div>
                    </div>
                    <h2 className="order__header long__header">ORDER INFORMATION</h2>
                    <div className="order-inf__wrap" style={(device)?{minWidth: '100%'}:{minWidth: '150%'}}>
                        <div className="form__wrap">
                            <form action="" method="get">
                                <p>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" name="name" id="name" placeholder="Ivan Ivanov" required/>
                                </p>
                                <p>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" placeholder="swimming@stuff.ru" required/>
                                </p>
                                <p>
                                    <label htmlFor="phone">Phone:</label>
                                    <input type="tel" name="phone" id="phone" placeholder="+7 (952) 123-45-67" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"/>
                                </p>
                                <label className="article__label">Ship:</label>
                                <input type="radio" name="ship" id="ship_sdek_pick-up-point" defaultChecked onChange={()=>setShipOption({service: 'SDEK', type: 'point'})}/>
                                <input type="radio" name="ship" id="ship_sdek_rider" onChange={()=>setShipOption({service: 'SDEK', type: 'rider'})}/>
                                <input type="radio" name="ship" id="PR_pick-up-point" onChange={()=>setShipOption({service: 'PR', type: 'point'})}/>
                                <input type="radio" name="ship" id="PR_rider" onChange={()=>setShipOption({service: 'PR', type: 'rider'})}/>
                                <div className="ship__wrap">
                                    <div className="ship-option__selector">
                                        <div className="ship-option__wrap ship_sdek_pick-up-point">
                                            <label htmlFor="ship_sdek_pick-up-point">СДЭК (до пункта выдачи)</label>
                                        </div>
                                        <div className="ship-option__wrap ship_sdek_rider">
                                            <label htmlFor="ship_sdek_rider">СДЭК (курьером)</label>
                                        </div>
                                        <div className="ship-option__wrap PR_pick-up-point">
                                            <label htmlFor="PR_pick-up-point">Почта России (до пункта выдачи)</label>
                                        </div>
                                        <div className="ship-option__wrap PR_rider">
                                            <label htmlFor="PR_rider">Почта России (курьером)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="adress-label__wrap">
                                    <label className="article__label">Address:</label>
                                    <div className="user-hints__ship">    
                                        <h4 className="pick-up-point__hint">введите адрес пункта выдачи</h4>
                                        <h4 className="rider__hint">введите адрес проживания</h4>
                                    </div>
                                </div>
                                <div className="adress__wrap">
                                    <div className="adress__part ship-city">
                                        <label htmlFor="city">Город:</label>
                                        <input type="text" name="city" id="city" required/>
                                    </div>
                                    <div className="adress__part ship-street">
                                        <label htmlFor="street">Улица:</label>
                                        <input type="text" name="street" id="street" required/>
                                    </div>
                                    <div className="adress__part ship-house">
                                        <label htmlFor="house">Дом:</label>
                                        <input type="text" name="house" id="house" required/>
                                    </div>
                                    <div className="adress__part ship-apartments">
                                        <label htmlFor="apartments">Квартира:</label>
                                        <input type="text" name="apartments" id="apartments" required={(shipOption.type == 'rider')}/> 
                                    </div>
                                    <div className="adress__part ship-index">
                                        <label htmlFor="index">Индекс:</label>
                                        <input type="text" name="index" id="index" required/> 
                                    </div>
                                </div>
                                <button type="submit" disabled={(cart.length == 0)}>Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Background firstColor={"rgba(255,255,255"} secondColor={"rgba(211,211,211"} thirdColor={"rgba(181,181,181"} />
            </section>
            <Footer/>
        </>
    );
}

export default CartPage;