import { useDispatch, useSelector } from "react-redux";
import { remove, clear } from "../redux/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleRemove(item) {
    dispatch(remove(item));
  }

  function handleClear() {
    dispatch(clear());
  }

  return (
    <div className="container pt-5 mx-auto px-12 mt-10">
      {items.length == 0 ? (
        <h5 className="ml-4 flex flex-col gap-7 capitalize text-3xl font-medium tracking-wider">
          Your cart is empty
          <hr />
        </h5>
      ) : (
        <>
          <div className="flex justify-between">
            <h1 className="ml-4 flex flex-col gap-7 capitalize text-3xl font-medium tracking-wider mb-10">
              Shopping Cart
            </h1>
            <button onClick={handleClear} className="btn btn-error">
              Clear Cart
            </button>
          </div>
          {items.map((item, index) => (
            <>
              <div
                key={index}
                className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-t border-base-300 pt-6 last:border-b-0"
              >
                <img
                  className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="sm:ml-16 sm:w-48">
                  <h4 className="capitalize font-medium">{item.title}</h4>
                  <h3 className="mt-2 capitalize text-sm text-neutral-content">
                    {item.company}
                  </h3>
                  <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                    color:
                    <span
                      className="badge badge-sm"
                      style={{ backgroundColor: item.color }}
                    ></span>
                  </p>
                </div>
                <div className="sm:ml-12">
                  <div className="form-control max-w-xs">
                    <label htmlFor="selectin" className="label p-0">
                      <span className="label-text">Amount</span>
                    </label>
                    <select
                      name="amount"
                      id="selectin"
                      defaultValue={item.quantity}
                      className="focus:outline-none mt-2 select select-base select-bordered select-xs"
                    >
                      {Array.from({ length: item.quantity + 5 }, (value, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => handleRemove(item)}
                    className="mt-2 link link-primary link-hover text-sm"
                  >
                    remove
                  </button>
                </div>

                <p className="font-medium sm:ml-auto">
                  ${(item.price / 100).toFixed(2)}
                </p>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default Cart;
