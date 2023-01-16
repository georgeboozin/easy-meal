import s from "./Menu.module.css";

interface Props {}

export const Menu = ({}: Props) => {
  return (
    <>
      <p className="text-5xl pt-8 px-4 lg:px-8">Menu</p>
      <div className="flex font-lato overflow-auto py-8 px-4 lg:px-8">
        <div className="cluster">
          <div className="flex mb-8">
            <div className={`${s.card}`}>
              <img src="/menu/falafel.png" alt="falafel" />
            </div>
            <div className={`${s.card}`}>
              <img src="/menu/salad-mchadi.png" alt="salad-mchadi" />
            </div>
          </div>
          <div className="flex">
            <div className={`${s.card}`}>
              <img src="/menu/spring-roll.png" alt="spring-roll" />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/mchadi-pkhali-lobio.png"
                alt="mchadi-pkhali-lobio"
              />
            </div>
          </div>
        </div>

        <div className="cluster">
          <div className="flex mb-8">
            <div className={`${s.card}`}>
              <img src="/menu/sandwich.png" alt="sandwich" />
            </div>
            <div className={`${s.card}`}>
              <img src="/menu/chicken-salad.png" alt="chicken-salad" />
            </div>
          </div>
          <div className="flex">
            <div className={`${s.card}`}>
              <img
                src="/menu/scramble-with-vegetables.png"
                alt="scramble-with-vegetables"
              />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/pkhali-beans-salad.png"
                alt="pkhali-beans-salad"
              />
            </div>
          </div>
        </div>

        <div className="cluster">
          <div className="flex mb-8">
            <div className={`${s.card}`}>
              <img src="/menu/english-breakfast.png" alt="english-breakfast" />
            </div>
            <div className={`${s.card}`}>
              <img src="/menu/quinoa-salad.png" alt="quinoa-salad" />
            </div>
          </div>
          <div className="flex">
            <div className={`${s.card}`}>
              <img src="/menu/french-breakfast.png" alt="french-breakfast" />
            </div>
            <div className={`${s.card}`}>
              <img src="/menu/chicken-poke.png" alt="chicken-poke" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
