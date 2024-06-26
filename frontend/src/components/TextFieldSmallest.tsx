import React from "react";

import styles from "./TextFieldSmallest.module.css";

/**
 * See `src/components/Button.tsx` for basic info about prop interfaces. Here we also use an `Omit`
 * type, which is a built-in TypeScript utility type. `Omit<X, Y>` gives us the type X, excluding
 * any fields Y. In this case, we are extending `React.ComponentProps<"input">` (the props that an
 * `<input>` component can receive), but excluding the specific prop `type`. We exclude `type`
 * because we will set `type="text"` on the underlying `<input>` component, so there's no point in
 * allowing the developer to pass that prop in themselves.
 */
export type TextFieldSmallProps = {
  label: string;
  error?: boolean;
} & Omit<React.ComponentProps<"input">, "type">;

/**
 * See `src/components/Button.tsx` for an explanation of `React.forwardRef`.
 */
export const TextFieldSmallest = React.forwardRef<HTMLInputElement, TextFieldSmallProps>(
  function TextFieldSmallest({ label, error = false, className, placeholder, ...props }, ref) {
    let wrapperClass = styles.wrapper;
    if (className) {
      wrapperClass += ` ${className}`;
    }
    let inputClass = styles.input;
    if (error) {
      inputClass += ` ${styles.error}`;
    }
    return (
      <div className={wrapperClass}>
        <label className={styles.label}>
          <p>{label}</p>
          <input
            ref={ref}
            type="text"
            className={inputClass}
            {...props}
            placeholder={placeholder}
          />
        </label>
      </div>
    );
  },
);
