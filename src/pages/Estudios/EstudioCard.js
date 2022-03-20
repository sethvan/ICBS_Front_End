function EstudioCard(props) {
  const displayLimit = 6;
  let displayedCollection = [];
  for (let i = 0; i < displayLimit; ++i) {
    displayedCollection.push(props.collection.items[i]);
  }

  return (
    <div className="card mb-3 ">
      <div className="card-body">
        <h3 className="card-title">{props.collection.title}</h3>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.collection.subtitle}
        </h6>
        {props.collection.items.length === 0 ? (
          <h4>( Pronto tendremos {props.collection.title} aqui )</h4>
        ) : (
          <ul>{displayedCollection}</ul>
        )}

        {props.collection.items.length > displayLimit ? (
          <button
            className="btn col-12 btn-info"
            onClick={() => {
              props.displayCollection(props.collection);
            }}
          >
            Haga clic aquí para ver más {props.collection.title}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EstudioCard;
