"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentProps,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { estimateServiceOptions, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";
import { buttonStyles } from "@/components/ui/button";

type EstimateDialogContextValue = {
  openEstimate: (service?: string) => void;
};

const EstimateDialogContext =
  createContext<EstimateDialogContextValue | null>(null);

const fieldStyles =
  "h-12 w-full rounded-xl border border-navy/15 bg-white px-3.5 text-base text-navy shadow-[inset_0_1px_0_rgba(20,43,70,0.03)] outline-none transition placeholder:text-body/90 focus:border-orange focus:ring-2 focus:ring-orange/25 sm:text-sm";

const labelStyles =
  "mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy/70";

export function EstimateDialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formId = useId();
  const [selectedService, setSelectedService] = useState("Not sure yet");
  const [submitted, setSubmitted] = useState(false);

  const openEstimate = useCallback((service?: string) => {
    setSelectedService(service ?? "Not sure yet");
    setSubmitted(false);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      document.documentElement.style.overflow = "hidden";
      dialog.showModal();
      window.setTimeout(() => nameInputRef.current?.focus(), 0);
    }
  }, []);

  const closeEstimate = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus();
    }
  }, [submitted]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeEstimate();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) {
      return;
    }
    setSubmitted(true);
  }

  return (
    <EstimateDialogContext.Provider value={{ openEstimate }}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby="estimate-title"
        aria-describedby="estimate-description"
        onClick={handleBackdropClick}
        onClose={() => {
          document.documentElement.style.overflow = "";
          setSubmitted(false);
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(calc(100vw-2rem),44rem)] overflow-y-auto rounded-[1.75rem] border border-white/60 bg-cream p-6 text-navy shadow-[0_40px_100px_-30px_rgba(20,43,70,0.65)] sm:p-8"
      >
        {submitted ? (
          <div
            ref={successRef}
            role="status"
            tabIndex={-1}
            className="flex min-h-[22rem] flex-col items-center justify-center text-center outline-none"
          >
            <span className="grid size-14 place-items-center rounded-full bg-orange text-navy">
              <Icon name="check" className="size-7" />
            </span>
            <h2
              id="estimate-title"
              className="mt-6 font-heading text-3xl font-bold tracking-[-0.04em] text-navy"
            >
              Demo form only
            </h2>
            <p
              id="estimate-description"
              className="mt-3 max-w-sm text-sm leading-6 text-body"
            >
              No request was sent or stored. This form is a layout demonstration
              for Summit Roofing Co.
            </p>
            <p className="mt-5 text-sm text-body">
              To reach the business, call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4"
              >
                {site.phone}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={closeEstimate}
              className={buttonStyles({ className: "mt-8" })}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-orange-deep">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-orange"
              />
              Free estimate
            </p>
            <h2
              id="estimate-title"
              className="mt-3 font-heading text-[clamp(1.9rem,5vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.04em] text-navy"
            >
              Tell us about your roof.
            </h2>
            <p
              id="estimate-description"
              className="mt-3 max-w-lg text-sm leading-6 text-body"
            >
              Share a few details and we&apos;ll explain how the estimate request
              works. This demo form does not send or store submissions.
            </p>

            <form onSubmit={handleSubmit} className="mt-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className={labelStyles}>
                    Full name
                  </label>
                  <input
                    ref={nameInputRef}
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className={fieldStyles}
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className={labelStyles}>
                    Phone
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="(214) 555-0186"
                    className={fieldStyles}
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-email`} className={labelStyles}>
                    Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldStyles}
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-property`} className={labelStyles}>
                    Property type
                  </label>
                  <select
                    id={`${formId}-property`}
                    name="propertyType"
                    className={fieldStyles}
                    defaultValue="Home"
                  >
                    <option>Home</option>
                    <option>Commercial property</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${formId}-service`} className={labelStyles}>
                    Service needed
                  </label>
                  <select
                    id={`${formId}-service`}
                    name="service"
                    className={fieldStyles}
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                  >
                    {estimateServiceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${formId}-message`} className={labelStyles}>
                    Project details{" "}
                    <span className="font-normal normal-case tracking-normal text-body/90">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={4}
                    placeholder="Roof age, visible issues, or anything we should know"
                    className={cn(fieldStyles, "h-auto min-h-28 py-3")}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className={buttonStyles({ size: "lg" })}>
                  Request My Estimate
                  <Icon name="arrow-right" className="size-4" />
                </button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-orange-deep"
                >
                  <Icon name="phone" className="size-4" />
                  {site.phone}
                </a>
              </div>
              <p className="mt-4 text-xs leading-5 text-body/90">
                Demo notice: submissions are not stored, sent, or reviewed. The
                phone number is a fictional placeholder.
              </p>
            </form>
          </>
        )}

        <button
          type="button"
          onClick={closeEstimate}
          aria-label="Close estimate form"
          className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-navy/10 bg-white/80 text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          <Icon name="close" className="size-5" />
        </button>
      </dialog>
    </EstimateDialogContext.Provider>
  );
}

export function useEstimateDialog(): EstimateDialogContextValue {
  const context = useContext(EstimateDialogContext);
  if (!context) {
    throw new Error(
      "useEstimateDialog must be used within an EstimateDialogProvider.",
    );
  }
  return context;
}

type EstimateTriggerProps = Omit<ComponentProps<"button">, "type"> & {
  service?: string;
};

export function EstimateTrigger({
  service,
  className,
  children,
  onClick,
  ...props
}: EstimateTriggerProps) {
  const { openEstimate } = useEstimateDialog();

  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openEstimate(service);
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
