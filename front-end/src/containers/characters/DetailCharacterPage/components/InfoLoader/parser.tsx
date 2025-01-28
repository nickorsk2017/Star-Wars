export const parserData = (data: Types.RecordsData[]) => {
  const rows: Array<React.ReactElement> = [];

  let i = 0;

  data.forEach((entity) => {
    for (const key in entity) {
      const value = entity[key];
      const skip =
        typeof value !== "string" ||
        key === "url" ||
        key === "created" ||
        key === "edited";

      if (skip) {
        continue;
      }

      let JSX: React.ReactElement;
      const keyElement = `${i}-${key}`;

      if (key === "title" || key === "name") {
        JSX = (
          <h2
            key={keyElement}
            className="flex items-center justify-center h-10 w-full mb-5 font-extrabold border-b-2 bg-primary"
          >
            {value}
          </h2>
        );
      } else {
        JSX = (
          <div
            key={keyElement}
            className="grid gap-3 grid-cols-[200px_1fr] mb-5"
          >
            <b>{key.replaceAll("_", " ")}:</b>
            <span>{value}</span>
          </div>
        );
      }

      rows.push(JSX);
      i++;
    }
  });

  return rows;
};
