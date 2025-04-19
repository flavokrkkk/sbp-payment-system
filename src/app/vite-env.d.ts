/// <reference types="vite/client" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_BASE_SERVER_URL: string;
  readonly VITE_BASE_SERVER_DEV_URL: string;
  readonly VITE_DEV_MODE: string;
}
