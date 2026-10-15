'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, MessageSquare, Mail, User, Phone, ExternalLink } from 'lucide-react';
import { contactForm } from '@/data/portfolio';

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm('meaerbpy');

  return (
    <div className="space-y-8 not-prose my-6">
      {/* Contact Form Card */}
      <div className="rounded-2xl border border-fd-border bg-fd-card/40 p-6 sm:p-8">
        <div className="mb-6 pb-4 border-b border-fd-border/70">
          <h2 className="text-xl font-bold tracking-tight text-fd-foreground flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-fd-primary" />
            <span>Send a Direct Message</span>
          </h2>
          <p className="mt-1 text-sm text-fd-muted-foreground leading-relaxed">
            Fill out the form below and I will respond to your email as soon as possible.
          </p>
        </div>

        {state.succeeded ? (
          <div className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-fd-foreground">
              Message Sent Successfully!
            </h3>
            <p className="text-sm text-fd-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Your message has been sent to Rajdeep and you will receive a response shortly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-fd-primary hover:underline cursor-pointer"
              >
                <span>Send another message</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-fd-muted-foreground" />
                  <span>
                    Your Name <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Rajdeep Singh"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-xs text-rose-500 mt-1"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-fd-muted-foreground" />
                  <span>
                    Email Address <span className="text-rose-500">*</span>
                  </span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-xs text-rose-500 mt-1"
                />
              </div>
            </div>

            {/* Phone (Optional) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-fd-muted-foreground" />
                  <span>Phone Number</span>
                </label>
                <span className="text-[11px] font-mono text-fd-muted-foreground/70">
                  Optional
                </span>
              </div>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
                className="text-xs text-rose-500 mt-1"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-fd-muted-foreground" />
                <span>
                  Message <span className="text-rose-500">*</span>
                </span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all resize-y"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-xs text-rose-500 mt-1"
              />
            </div>

            {/* General Errors */}
            <ValidationError
              errors={state.errors}
              className="text-xs text-rose-500 bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg"
            />

            {/* Submit */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-6 py-2.5 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
              >
                {state.submitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Alternative Channels / Direct Email & Socials */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-fd-foreground">
          Other Ways to Connect
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          <a
            href="mailto:officialrajdeepsingh@gmail.com"
            className="flex items-center justify-between p-3 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-muted/50 hover:border-fd-primary/40 transition-all group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="w-4 h-4 text-fd-primary shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-medium text-fd-foreground">Email Directly</div>
                <div className="text-[11px] font-mono text-fd-muted-foreground truncate">
                  officialrajdeepsingh@gmail.com
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground/60 group-hover:text-fd-primary transition-colors shrink-0 ml-1" />
          </a>

          {contactForm.slice(0, 5).map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-muted/50 hover:border-fd-primary/40 transition-all group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-medium text-fd-foreground">{s.name}</span>
              </div>
              <div className="flex items-center gap-1 min-w-0">
                {s.handle && (
                  <span className="text-[11px] font-mono text-fd-muted-foreground truncate max-w-25">
                    {s.handle}
                  </span>
                )}
                <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground/60 group-hover:text-fd-primary transition-colors shrink-0 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
