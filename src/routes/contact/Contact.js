import { useEffect } from "react";

import { Title, InnerContainer, PageContainer, Subtitle } from "components";
import { contact } from "reference-data";

import { ContactCard, ContactForm } from "./components";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
        <Title label="CONTACT" />
        <Subtitle
          label="Contact Details"
          customClasses="sm:mt-[138px] mt-[83px] sm:ml-[28px] ml-0 mb-[16px]"
        />
        <div className="flex justify-space-between flex-wrap">
          {contact.map(({ icon, title, subtitle }) => (
            <ContactCard
              key={title}
              icon={icon}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
        <Subtitle
          label="Contact Form"
          customClasses="sm:mt-[86px] mt-[66px] sm:ml-[28px] ml-0 mb-[16px]"
        />
        <ContactForm />
      </InnerContainer>
    </PageContainer>
  );
};

export { Contact };
export default Contact;
