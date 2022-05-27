const BreadCrumbs = ({ setDisplay, breadCrumbs }) => {

  return (
    <div className="breadcrumbs">
      {breadCrumbs.map((item) => (
        <div onClick={() => setDisplay(item)} key={item}>
          {item}
        </div>
      ))}
      &nbsp;
    </div>
  );
};

export default BreadCrumbs;
