import ArtObject from "./ArtObject";

export default function ArtObjects(props) {
  const { artObjects = [] } = props.collection;

  return (
    <>
      {artObjects.map((item) => (
        <ArtObject key={item.id} {...item} />
      ))}
      ;
    </>
  );
}
