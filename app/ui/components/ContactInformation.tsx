import { ContactInformationProps } from "@/app/definitions/definitions";

const ContactInformation = ({ icon, content }: ContactInformationProps) => (
  <div className="mb-3 flex justify-center gap-5 rounded-3xl bg-card-hover p-5 text-center text-primary md:text-start shadow-lg shadow-[#141E28]" >
    <p className="self-center text-xl">{icon}</p>
    <p className="self-center">{content}</p>
  </div>
);

export default ContactInformation;
