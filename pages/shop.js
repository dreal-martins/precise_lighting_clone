import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Cartcontext } from '../components/context/Context';
import { showroomitem } from '../data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
  // const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const response = await axios.get('http://fakestoreapi.com/products');
  //   setData(response.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  const notify = () => {
    toast.success('Item added to cart', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <>
      <section className="section_one_shop">
        <div className="section_one_shop_img">
          <marquee loop="-1" srollamount="30" width="100%">
            <h2>Welcome to the Showroom</h2>
          </marquee>
        </div>
      </section>
      <section className="section_two_shop">
        <div className="section_two_shop_details">
          {showroomitem.map((item, index) => {
            item.quantity = 1;
            return (
              <div className="section_two_shop_data" key={index}>
                <div className="section_two_shop_data_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="shop_cat">
                  <p>{item.title.substring(0, 20)}...</p>
                  <h3>${item.price}</h3>
                </div>
                <button
                  onClick={() => {
                    if (notify) {
                      toast.success('Item added to cart', {
                        position: 'bottom-center',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'colored',
                      });
                    }
                    dispatch({ type: 'ADD', payload: item });
                  }}
                >
                  Add to cart
                </button>
                <ToastContainer />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shop;
