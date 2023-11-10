import ContactHeding from "@/Components/Contact/ContactHeding";
import ContactLeftSaid from "@/Components/Contact/ContactLeftSaid";
import ContactRightSaid from "@/Components/Contact/ContactRightSaid";

export default function Contact() {
  return (
    <>
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
