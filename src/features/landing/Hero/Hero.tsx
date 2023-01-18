import s from "./Hero.module.css";

interface Props {}

export const Hero = ({}: Props) => {
  return (
    <div className={`${s.root}`}>
      <div className="mx-auto lg:max-w-7xl h-full flex font-lato">
        <div className={s.tagline}>
          <div>
            <div className="text-5xl text-white font-bold">Easy solution</div>
            <div className="text-3xl md:text-4xl text-white font-bold">
              for lunches and snacks
            </div>
          </div>
        </div>
        <div className={`${s.photo}`}>
          <img src="/main-dish.webp" loading="lazy" alt="ladning" />
        </div>
      </div>
    </div>
  );
};
