import { data } from "./data";
const Mpa = () => {
  return (
    <div>
      {data.map((data) => {
        const { name, id } = data;
        return <h1 key={id}>{name}</h1>;
      })}
    </div>
  );
};

export default Mpa;
