import { EAcceptFiles } from "@/shared/libs/utils/acceptFiles";

const DownloadFile = ({
  link,
  children,
}: {
  link: EAcceptFiles;
  children: React.ReactNode;
}) => {
  return (
    <a href={`/files/${link}`} download={link}>
      {children}
    </a>
  );
};

export default DownloadFile;
