function EstudioCollection(props) {
  return (
    <>
      <div className="estudio-collection mx-auto mt-0 mb-auto text-center">
        <h2 className="card-title">{props.collection.title}</h2>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.collection.subtitle}
        </h6>
        <ul style={{ listStyle: "none" }}>{props.collection.items}</ul>
      </div>
    </>
  );
}

export default EstudioCollection;
