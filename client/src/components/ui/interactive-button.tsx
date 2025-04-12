import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--color-primary),0.5)] hover:shadow-[0_0_25px_rgba(var(--color-primary),0.65)] hover:bg-primary/90",
        gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow hover:opacity-90",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

// Interactive button with animations and hover effects
export interface InteractiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ripple?: boolean;
  hoverScale?: boolean;
  pressEffect?: boolean;
}

const InteractiveButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveButtonProps
>(({ 
  className, 
  variant, 
  size, 
  animation,
  ripple = false, 
  hoverScale = false,
  pressEffect = true,
  ...props 
}, ref) => {
  const [rippleEffect, setRippleEffect] = React.useState<{
    x: number;
    y: number;
    size: number;
  } | null>(null);

  // Handle ripple effect on click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      
      setRippleEffect({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        size,
      });
      
      setTimeout(() => setRippleEffect(null), 600);
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button
      ref={ref}
      variant={variant as any}
      size={size}
      className={cn(
        buttonVariants({ variant, size, animation, className }),
        ripple && "overflow-hidden relative",
        hoverScale && "hover:scale-105 transition-transform",
        pressEffect && "active:scale-95 transform transition-all duration-75",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {props.children}
      
      {/* Ripple effect */}
      {rippleEffect && (
        <span
          className="absolute opacity-30 bg-white rounded-full animate-ripple"
          style={{
            left: rippleEffect.x - rippleEffect.size / 2,
            top: rippleEffect.y - rippleEffect.size / 2,
            width: rippleEffect.size,
            height: rippleEffect.size,
          }}
        />
      )}
    </Button>
  );
});
InteractiveButton.displayName = "InteractiveButton";

// Animated Button with more complex effects
interface AnimatedButtonProps extends InteractiveButtonProps {
  loadingText?: string;
  successText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  animationType?: "slide" | "fade" | "scale" | "none";
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    loadingText, 
    successText, 
    icon, 
    iconPosition = "left",
    animationType = "slide", 
    disabled,
    children,
    ...props 
  }, ref) => {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
    
    // Auto reset after success
    React.useEffect(() => {
      if (status === "success") {
        const timer = setTimeout(() => {
          setStatus("idle");
        }, 2000);
        return () => clearTimeout(timer);
      }
    }, [status]);

    // Handle status changes on click
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (status === "idle" && props.onClick) {
        setStatus("loading");
        try {
          await Promise.resolve(props.onClick(e));
          setStatus("success");
        } catch (error) {
          setStatus("idle");
        }
      }
    };

    // Button content based on status
    const renderContent = () => {
      switch (status) {
        case "loading":
          return (
            <div className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {loadingText || "Loading..."}
            </div>
          );
        case "success":
          return (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              {successText || "Success!"}
            </div>
          );
        default:
          return (
            <div className="flex items-center gap-2">
              {icon && iconPosition === "left" && <span>{icon}</span>}
              {children}
              {icon && iconPosition === "right" && <span>{icon}</span>}
            </div>
          );
      }
    };

    // Animation variants based on type
    const getAnimationProps = () => {
      if (animationType === "none") return {};
      
      const variants = {
        slide: {
          initial: { x: -20, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 20, opacity: 0 },
        },
        fade: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        },
        scale: {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
        },
      };
      
      return variants[animationType];
    };

    return (
      <Button
        ref={ref}
        variant={variant as any}
        size={size}
        className={className}
        disabled={disabled || status === "loading"}
        onClick={handleClick}
        {...props}
      >
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={getAnimationProps()}
          transition={{ duration: 0.2 }}
          key={status}
        >
          {renderContent()}
        </motion.div>
      </Button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

// Add ripple animation to CSS
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
    .animate-ripple {
      animation: ripple 0.6s linear forwards;
    }
  `;
  document.head.appendChild(style);
}

export { InteractiveButton, AnimatedButton, buttonVariants };