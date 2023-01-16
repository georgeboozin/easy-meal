import s from "./Hero.module.css";

interface Props {}

export const Hero = ({}: Props) => {
  return (
    <div className={`flex ${s.root} font-lato`}>
      <div className={s.tagline}>
        <div>
          <div className="text-5xl text-white font-bold">Easy solution</div>
          <div className="text-4xl text-white font-bold">
            for lunches and snacks
          </div>
        </div>
      </div>
      <div className={s.photo}>
        <img src="/main-dish.png" alt="ladning" />
      </div>
    </div>
  );
};
