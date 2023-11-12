import ContactHeding from "@/Components/Contact/ContactHeding";
import ContactLeftSaid from "@/Components/Contact/ContactLeftSaid";
import ContactRightSaid from "@/Components/Contact/ContactRightSaid";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <meta
          name="DipLearner Contact With Us"
          title="DipLearner Contact With Us"
          content="You have any problem you can contact with us. we alawys conected with you. you need any souppet we alawys with you"
        />
        <title>Contact</title>
      </Head>
      <ContactHeding />
      <div className="max-w-[1366px] h-auto m-auto">
        <div className="container m-auto h-auto">
          <div className="  py-12 lg:py-[50px] overflow-hidden relative z-10">
            <div className="container m-auto">
              <div className="flex flex-wrap lg:justify-between -mx-4">
                <ContactLeftSaid />
                <ContactRightSaid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
