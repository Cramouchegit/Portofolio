import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import FormContact from "./FormContact";

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );

  return (
    <section
      id="contact"
      className="space-y-12 px-8 md:px-24 md:mt-12"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        Contact me
      </h1>
      <div className="flex text-white py-8 md:py-20 items-center flex-col md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-3xl md:text-5xl">
              Want to contact me to be part of the team at your job? Of course,
              your message will go to my email.
            </h1>
            <p className="text-white text-xl md:text-2xl md:w-2/3">
              You can find me on these platforms:
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-start md:items-center mt-8 md:-mt-10"
          style={{ flexBasis: "50%" }}
        >
          <ul className="text-white font-openSans font-bold space-y-5 md:text-2xl text-lg">
            <li>
              <FormContact />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
