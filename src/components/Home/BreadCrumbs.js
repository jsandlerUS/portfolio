import { useSelector, useDispatch } from "react-redux";

const BreadCrumbs = ({ setDisplay }) => {
  const { breadCrumbs } = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateCrumb = (crumb) => {
    dispatch({ type: "DELETE_CRUMBS", crumb });
    setDisplay(crumb);
  };

  return (
    <div className="breadcrumbs">
      {breadCrumbs.map((item) => (
        <div onClick={() => updateCrumb(item)} key={item}>
          {item}
        </div>
      ))}
      &nbsp;
    </div>
  );
};

export default BreadCrumbs;
