import { CardContainer } from "components";
import withContactForm from "./withContactForm";
import { FloatingInput } from "routes/contact/components";

const ContactForm = ({
  handleOnSubmit,
  handleOnChange,
  inputs,
  status,
  label,
}) => (
  <div className="p-[16px_28px_46px_28px]">
    <CardContainer customClasses="py-[15px] px-[30px]">
      <form onSubmit={handleOnSubmit} className="flex flex-col">
        <div className="flex justify-between flex-wrap">
          <div className="py-4 sm:w-1/2 w-full sm:pr-7 pr-0 h-[92px]">
            <FloatingInput
              id="name"
              type="text"
              label="Full Name"
              value={inputs.name}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="py-4 sm:w-1/2 w-full sm:pl-7 pl-0 h-[92px]">
            <FloatingInput
              id="email"
              type="email"
              label="Email Address"
              value={inputs.email}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>

        <div className="pt-6 pb-4 w-full h-[112px]">
          <FloatingInput
            id="message"
            type="text"
            label="Your Message"
            value={inputs.message}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="flex justify-start mt-6">
          <button
            type="submit"
            disabled={status.submitting}
            className="
              flex items-center gap-2
              text-[#EEEEEE]
              bg-transparent
              hover:bg-transparent
              text-[14px] font-bold
              h-[56px]
              leading-[56px]
              transition-colors
            "
          >
            {label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] h-[20px] fill-current"
              aria-hidden="true"
            >
              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
      </form>
    </CardContainer>
  </div>
);

export { ContactForm };
export default withContactForm(ContactForm);
