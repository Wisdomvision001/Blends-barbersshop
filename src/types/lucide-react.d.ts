declare module "lucide-react" {
  type LucideIcon = (
    props: import("react").SVGProps<SVGSVGElement>,
  ) => import("react").JSX.Element;

  export const MousePointer: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const AlertTriangle: LucideIcon;
}