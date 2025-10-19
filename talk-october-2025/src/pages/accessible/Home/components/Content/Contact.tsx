import Section from '../Section';

export default function Contact() {
  return (
    <Section title="Contact">
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 border-2 rounded border-slate-600 text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="p-2 border-2 rounded border-slate-600 text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="p-2 border-2 rounded border-slate-600 text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </Section>
  );
}
