"use client";
import { useEffect, useRef } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface TextareaResizableProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  minheight: number;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TextareaResizable(props: TextareaResizableProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = props.minheight + "px";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <textarea
      ref={ref}
      {...props}
      onInput={() => {
        if (!ref.current) return;
        const offset = ref.current.offsetHeight - ref.current.clientHeight;
        ref.current.style.height = props.minheight + "px";
        if (ref.current.scrollHeight === props.minheight) {
          ref.current.style.height = props.minheight + "px";
          return;
        }
        ref.current.style.height = ref.current.scrollHeight + offset + "px";
      }}
      className={cn(
        "block resize-none overflow-y-hidden px-3 py-2",
        props.className
      )}
    />
  );
}
