import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import generateCaptcha from "./generatecaptcha";
import { FiRefreshCcw } from "react-icons/fi";

const Captcha = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [captcha, setCaptcha] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const refreshCaptcha = () => {
    setIsSpinning(true);
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setValue("captchaValue", newCaptcha, { shouldValidate: false });
    setValue('captcha','')
    setTimeout(() => setIsSpinning(false), 500);
  };
  useEffect(() => {
    refreshCaptcha();
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="relative px-3 py-3 font-mono text-2xl font-bold rounded bg-yellow-50 tracking-[0.5em] select-none bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:10px_10px] border border-yellow-200 shadow-inner overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="w-full h-[4px] bg-cyan-900 -rotate-3"></div>
          </div>
          <span className="relative z-10 text-gray-700">{captcha}</span>
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors group dark:text-white"
        >
          Can't read image?
          <span className="flex items-center gap-1 text-cyan-600 font-medium group-hover:underline">
            click here to
            <FiRefreshCcw
              className={`h-4 w-4 ${
                isSpinning ? "animate-spin" : ""
              }`}
            />
            Refresh
          </span>
        </button>
      </div>

      <input
        {...register("captcha")}
        placeholder="Enter Captcha"
        className="w-full rounded-lg border p-3 dark:bg-gray-900"
      />
      {errors?.captcha && (
        <p className="text-red-600 text-sm">{errors.captcha.message}</p>
      )}
    </div>
  );
};

export default Captcha;
