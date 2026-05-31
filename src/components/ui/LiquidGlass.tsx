import type { ComponentType, HTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";

type GlassElement = "div" | "header" | "nav" | "span";

type RefractionOptions = {
  radius: number;
  blur?: number;
  glassThickness?: number;
  bezelWidth?: number;
  refractiveIndex?: number;
  specularOpacity?: number;
  specularAngle?: number;
};

type LiquidGlassProps = HTMLAttributes<HTMLElement> & {
  as?: GlassElement;
  children: ReactNode;
  refraction: RefractionOptions;
};

type RefractiveRegistry = Record<GlassElement, ComponentType<HTMLAttributes<HTMLElement> & { refraction: RefractionOptions }>>;

export function LiquidGlass({ as = "div", children, refraction, ...props }: LiquidGlassProps) {
  const [registry, setRegistry] = useState<RefractiveRegistry | null>(null);

  useEffect(() => {
    let mounted = true;

    void import("@hashintel/refractive")
      .then(({ refractive }) => {
        if (!mounted) return;
        setRegistry({
          div: refractive.div,
          header: refractive.header,
          nav: refractive.nav,
          span: refractive.span,
        });
      })
      .catch(() => {
        if (!mounted) return;
        setRegistry(null);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (registry) {
    const RefractiveElement = registry[as];
    return (
      <RefractiveElement refraction={refraction} {...props}>
        {children}
      </RefractiveElement>
    );
  }

  const Element = as;

  return <Element {...props}>{children}</Element>;
}
