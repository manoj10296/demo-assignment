const Card = ({ data, detailsAction, deleteEmp }) => {
  return (
    <div className="card" style={{ width: "18rem", cursor: "pointer" }}>
      <img src={data?.avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data?.login}</h5>
        <i
          className="fas fa-2x fa-edit"
          onClick={() => detailsAction(data)}
          style={{ cursor: "pointer" }}
        ></i>
        <i
          className="fas fa-2x fa-trash"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteEmp(data?.id)}
        ></i>
      </div>
    </div>
  );
};

export default Card;
