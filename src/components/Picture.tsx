import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Picture: FC = () => {
  return (
    <motion.div
      className="py-12 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <motion.div
        className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg brightness-110 aspect-square"
        animate={{
          y: 10,
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        initial={{ y: -10 }}
      >
        <Image
          src="/profile-guntur.jpg"
          alt="Profile"
          width={150}
          height={150}
          priority={true}
        />
      </motion.div>
      <motion.h1
        className="font-openSans text-center text-4xl md:text-6xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Hello, I&apos;m Guntur Alamsyah.
      </motion.h1>
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-sky-100"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        initial={{ opacity: 0, y: -30 }}
      >
        Welcome to my portfolio. I&apos;m dedicated individual with a passion
        for computer science and technology. Im driven by a desire to contribute
        to my nation&apos;s progress through my work as a data scientist in the
        future. With a strong foundation in the field and a commitment to
        continuous learning, will strives to make a meaningful impact in the
        world of technology.
        <br />
        Want to learn more about me?
        <span className="text-sky-300">
          <a href="https://github.com/Cramouchegit">Check out my GitHub.</a>
        </span>
      </motion.p>
    </motion.div>
  );
};

export default Picture;
