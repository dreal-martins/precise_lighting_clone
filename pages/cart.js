import { useContext } from 'react';
import { Cartcontext } from '../components/context/Context';

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <section className="section_one_shop">
        <div className="section_one_shop_img">
          <marquee loop="-1" srollamount="30" width="100%">
            <h2>time to check out</h2>
          </marquee>
        </div>
      </section>

      <div className="cart">
        {state.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.title.substring(0, 30)}...</p>
              <p>$ {item.quantity * item.price}</p>
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: 'INCREASE', payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: 'DECREASE', payload: item });
                    } else {
                      dispatch({ type: 'REMOVE', payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
              <h2 onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                X
              </h2>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className="total">
            <h2>TOTAL PRICE: ${total}</h2>
          </div>
        )}
        {state.length === 0 && (
          <h1 className="no-items product">No Item in cart</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
