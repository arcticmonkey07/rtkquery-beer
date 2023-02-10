import { useRef } from "react";
import "./AddBeer.css";
import { IBeer } from "../../models/IBeer";
import { beerAPI } from "../../services/BeerService";
import { useAppSelector } from "../../hooks/redux";

function AddBeer() {
  const dark = useAppSelector(state => state.beerReducer.dark);

  const img = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const manufacturer = useRef<HTMLInputElement>(null);
  const availability = useRef<HTMLInputElement>(null);
  const amount = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const [createBeer, {}] = beerAPI.useCreateBeerMutation();

  const handleCreate = async () => {
    // await createBeer({ name, manufacturer } as IBeer);
    await createBeer({
      img: img.current?.value,
      name: name.current?.value,
      manufacturer: manufacturer.current?.value,
      availability: availability.current?.value,
      amount: amount.current?.value,
      price: price.current?.value,
    } as any);

    img.current!.value = "";
    name.current!.value = "";
    manufacturer.current!.value = "";
    availability.current!.value = "";
    amount.current!.value = "";
    price.current!.value = "";
  };

  return (
    <>
      <form className={`add-new-beer-form ${dark && "add-new-beer-form_dark"}`}>
        <label htmlFor="img">Введите ссылку на картинку</label>
        <input type="text" id="img" ref={img} />
        <label htmlFor="name">Введите название пива</label>
        <input type="text" id="name" ref={name} />
        <label htmlFor="manufacturer">Введите сорт пива</label>
        <input type="text" id="manufacturer" ref={manufacturer} />
        <label htmlFor="availability">Введите наличие</label>
        <input type="text" id="availability" ref={availability} />
        <label htmlFor="amount">Введите количество</label>
        <input type="text" id="amount" ref={amount} />
        <label htmlFor="price">Введите цену</label>
        <input type="text" id="price" ref={price} />
        <button className="add-new-beer__button" onClick={handleCreate}>
          Добавить новое пиво
        </button>
      </form>
    </>
  );
}

export default AddBeer;
