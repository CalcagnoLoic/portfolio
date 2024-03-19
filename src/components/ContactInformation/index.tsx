type ContactInformationProps = {
  icon: string;
  content: string;
};

const Component = ({ icon, content }: ContactInformationProps) => (
  <div className="bg-gallery mb-3 flex justify-center gap-5 rounded-3xl p-5 text-center text-tuatara md:text-start">
    <span className="self-center text-xl">{icon}</span>
    <p>{content}</p>
  </div>
);

export default Component;
