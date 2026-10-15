'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, MessageSquare, X, Mail, User, Phone } from 'lucide-react';

export function Collaboration() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm('meaerbpy');

  return (
    <section
      id="collaboration"
      className="mt-12 w-full rounded-2xl border border-fd-border bg-fd-card/40 p-6 md:p-8 scroll-mt-20 transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-fd-foreground flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-fd-primary" />
            <span>Have a project or question?</span>
          </h3>
          <p className="mt-1.5 text-sm text-fd-muted-foreground leading-relaxed">
            Feel free to reach out for business inquiries, questions, or collaboration.
          </p>
        </div>
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              if (state.succeeded) reset();
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-4 py-2.5 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 transition-all shadow-xs cursor-pointer"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>Close Form</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-6 pt-6 border-t border-fd-border/70 animate-in fade-in-50 duration-200">
          {state.succeeded ? (
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold text-fd-foreground">
                Message Sent Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-fd-muted-foreground max-w-md mx-auto">
                Thank you for reaching out. Your message has been received and I will get back to you shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={reset}
                  className="text-xs font-medium text-fd-primary hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-fd-muted-foreground" />
                    <span>
                      Your Name <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Rajdeep Singh"
                    className="w-full px-3 py-2 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all"
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
                    htmlFor="email"
                    className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-fd-muted-foreground" />
                    <span>
                      Email Address <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-rose-500 mt-1"
                  />
                </div>
              </div>

              {/* Phone / Mobile Number (Optional) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="phone"
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
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all"
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
                  htmlFor="message"
                  className="text-xs font-medium text-fd-foreground flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-fd-muted-foreground" />
                  <span>
                    Message <span className="text-rose-500">*</span>
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or inquiry..."
                  className="w-full px-3 py-2 rounded-lg border border-fd-border bg-fd-background text-sm text-fd-foreground placeholder:text-fd-muted-foreground/50 focus:outline-hidden focus:border-fd-primary focus:ring-1 focus:ring-fd-primary transition-all resize-y"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-xs text-rose-500 mt-1"
                />
              </div>

              {/* General Formspree errors */}
              <ValidationError errors={state.errors} className="text-xs text-rose-500" />

              {/* Submit & Cancel Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-2 text-xs font-medium rounded-lg border border-fd-border hover:bg-fd-muted/50 text-fd-muted-foreground hover:text-fd-foreground transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-5 py-2 text-xs font-medium text-fd-primary-foreground hover:bg-fd-primary/90 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
                >
                  {state.submitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </section>
  );
}
