function Content(props) {
  return (
    <div className="content">
      <div className="image-section">
        <img width="300" src={props.image} alt="" />
      </div>
      <div className="content-info">
        <h3 className="content-info__title">{props.title}</h3>
        <p className="content-info__host">{props.host}</p>
        <p className="content-info__reserv">{props.reserv}</p>
      </div>
    </div>
  );
};

export default Content;
