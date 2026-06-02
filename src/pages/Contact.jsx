import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            Have a project idea, freelance opportunity, or business inquiry?
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <ScrollReveal direction="left">
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <Mail className="text-green-400" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-400">
                    amanprajapati9871@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <Phone className="text-green-400" size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-400">
                    +91 7217814501
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-green-400" size={24} />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-400">
                    Haryana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Available For
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>• Full Stack MERN Development</li>
                <li>• Shopify Development</li>
                <li>• E-Commerce Websites</li>
                <li>• Business Websites</li>
                <li>• Website Optimization & SEO</li>
              </ul>
            </div>
          </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <form
              action="https://formspree.io/f/mvzyeqdr"
              method="POST"
              onSubmit={() => setLoading(true)}
              className="space-y-5"
            >
              <div>
                <label className="block mb-2 text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    focus:outline-none
                    focus:border-green-400
                  "
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    focus:outline-none
                    focus:border-green-400
                  "
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    focus:outline-none
                    focus:border-green-400
                  "
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    focus:outline-none
                    focus:border-green-400
                    resize-none
                  "
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  bg-green-500
                  text-slate-950
                  font-semibold
                  rounded-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-lg
                  hover:shadow-green-500/30
                "
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;