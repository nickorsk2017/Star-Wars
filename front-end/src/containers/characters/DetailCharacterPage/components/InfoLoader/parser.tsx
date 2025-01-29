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
          <h2 key={keyElement} className="fa-info-loader__head">
            {value}
          </h2>
        );
      } else {
        JSX = (
          <div key={keyElement} className="fa-info-loader__row">
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
