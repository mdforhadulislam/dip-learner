import AboutSection from "@/Components/Home/AboutSection";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <meta
          name="DipLearner About"
          title="DipLearner About"
          content='Diploma education presents a different dimension to every student with an opportunity to reinvent themselves. Our mission and objective is to differentiate online education by making traditional offline education more vibrant online and easy and understandable for students. Through all the diploma courses running under the Bangladesh Technical Education Board, you can take your studies to a different level whenever you want, sitting anywhere. We have skilled mentors and timely suggestions. So we are "DipLearner" to take care of your studies.'
        />
        <title>DipLearner || About</title>
      </Head>
      <AboutSection />
    </>
  );
}
