const SectionTitle = ({
  title,
  paragraph,
  width = "700px",
  center,
  mb = "100px",
  mt = "50px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  mt?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb, marginTop: mt }}
      >
        <h3 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-2xl">
          {title}
        </h3>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
