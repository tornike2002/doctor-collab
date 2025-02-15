// eslint-disable-next-line react/prop-types
export default function ContactForm({ errorEmail, sendEmail, messageError, loading }) {
    return (
      <div>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-[1rem] py-[3rem] md:gap-[1.5rem] w-full"
        >
          <h1 className="text-[40px] font-extrabold text-[#1A1B1D]">
            Contact Info
          </h1>
  
          <div className="flex flex-col w-full">
            <input
              placeholder="Email address"
              type="email"
              name="user_email"
              required
              className={`h-[4.6rem]  lg:w-[30rem] rounded-[0.375rem] pl-1 border ${
                errorEmail ? "border-red-500 border-[2px]" : ""
              }`}
            />
            {errorEmail && (
              <p className="text-red-500">Please enter a valid email address.</p>
            )}
          </div>
  
          <div className="flex flex-col w-full">
            <textarea
              rows={5}
              placeholder="Write your message"
              name="message"
              required
              className={`rounded-[0.375rem] lg:w-[30rem] pl-1 pt-4 border ${
                messageError ? "border-red-500 border-[2px]" : ""
              }`}
            />
            {messageError && (
              <p className="text-red-500">
                Message must be at least 10 characters long.
              </p>
            )}
          </div>
  
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-[10rem] mt-4"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    );
  }
  