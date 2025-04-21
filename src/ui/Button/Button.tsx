import { FC, ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-sm cursor-pointer font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "gradient-color-primary cursor-pointer transition-all font-semibold px-4 py-2 rounded-sm hover:transition border-[0.8px] border-solid border-t-red-600 relative text-on-primary border-1px border-secondary tracking-wider overflow-hidden",
        outline:
          "px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-white hover:bg-white/87 overflow-hidden",
        animatedGradient:
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      },
      size: {
        s: "h-8 px-6 py-5 text-sm",
        m: "h-11 px-6 py-5 text-md",
        l: "h-14 px-12 py-2 text-xl",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

type MotionButtonProps = HTMLMotionProps<"button">;

export interface ButtonProps
  extends Omit<MotionButtonProps, "ref">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  asChild,
  className,
  children,
  ...props
}) => {
  const isAnimated = variant === "animatedGradient";
  const isOutline = variant === "outline";

  if (isAnimated) {
    const stop = useMotionValue(100);
    const direction = useRef<number>(1);

    useAnimationFrame(() => {
      const current = stop.get();
      if (current >= 90) direction.current = -1;
      if (current <= 50) direction.current = 1;
      stop.set(current + 0.5 * direction.current);
    });

    const background = useTransform<number, string>(
      stop,
      (s) => `
        linear-gradient(217deg, var(--color-primary), rgba(255, 0, 0, 0) ${s}%),
        linear-gradient(127deg, var(--color-secondary), rgba(247, 247, 247, 0) ${s}%),
        linear-gradient(336deg, var(--color-accent), rgb(255, 255, 255) ${s}%)
      `
    );

    return (
      <motion.button
        {...props}
        className={cn(buttonVariants({ variant, size }), className)}
        style={{ background }}
        whileHover={{ opacity: 0.8 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
  }

  const Comp: React.ElementType = asChild ? Slot : motion.button;

  if (isOutline) {
    return (
      <div className="active:scale-95 transition-transform inline-flex relative p-[3px] tracking-wider ">
        <span className="absolute inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg" />
        <Comp
          className={cn(
            buttonVariants({ variant: "outline", size }),
            className
          )}
          {...props}
        >
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold text-transparent tracking-wide">
            {children}
          </span>
        </Comp>
      </div>
    );
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
};
