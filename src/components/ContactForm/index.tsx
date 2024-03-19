import Form from "../Form";
import ContactInformation from "../ContactInformation";

const Component = () => {
  return (
    <>
      <h2
        id="contact"
        className="my-10 text-center font-[sofia] text-2xl underline md:text-4xl"
      >
        Get in touch
      </h2>

      <div className="flex flex-col items-center lg:flex-row">
        <div>
          <div className="flex flex-col">
            <span>
              If you want more information about me or my work, don't hesitate
              to contact me with this contact form or directly on my email
              address.
            </span>
            <h3 className="mt-5">I will reply as soon as possible.</h3>
          </div>

          <div className="mt-5 flex-col">
            <ContactInformation icon="📩" content="calcagnoloic93@gmail.com" />
            <ContactInformation
              icon="🗺️"
              content="Belgium, Hainaut, 7170 La Hestre"
            />
          </div>
        </div>

        <Form />
      </div>
    </>
  );
};

export default Component;
