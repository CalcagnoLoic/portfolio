import Paragraph from "../../../typographies/Paragraph";

type ContactInformationProps = {
  icon: string;
  content: string | JSX.Element;
};

const Component = ({ icon, content }: ContactInformationProps) => (
  <div className="mb-3 flex justify-center gap-5 rounded-3xl bg-gallery p-5 text-center text-tuatara md:text-start">
    <Paragraph kind="span" content={icon} css="self-center text-xl" />
    <Paragraph kind="p" content={content} css="" />
  </div>
);

export default Component;
