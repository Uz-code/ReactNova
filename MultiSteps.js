import { useState } from "react";
import { motion } from "framer-motion";

export default function MultiSteps() {
  let [step, setStep] = useState(1);

  return (
    <div className="flex center min-h-screen items-start pt-40">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="flex justify-between rounded p-8">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="px-8 pb-8">
          <div>
		  	{step == 5 ?  <div className="mt-2 h-6 rounded " >Felicidades Termino el Set up de SAT CS </div>: <>
			  <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
			</> }
			<div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 w-4/6 rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700 select-none">
              Back
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${ step > 4 ? "pointer-events-none opacity-50" : "" } 
			  select-none bg items-center justify-center rounded-full bg-blue-400 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-500 active:bg-blue-700`}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 rounded-full bg-blue-200"
      ></motion.div>

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "white",
            borderColor: "rgb(226 232 240)",
            color: "rgb(148 163 184)",
          },
          active: {
            backgroundColor: "white",
            borderColor: "rgb(96 165 250)",
            color: "rgb(96 165 250)",
          },
          complete: {
            backgroundColor: "rgb(96 165 250)",
            borderColor: "rgb(96 165 250)",
            color: "rgb(96 165 250)",
          },
        }}
        transition={{ duration: 0.2 }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}