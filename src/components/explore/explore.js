import "./explore.less";

const Explore = () => {
  return (
    <div className="explore">
      <h1 className="heading">Explore Challenges</h1>
      <input className="inp" />
      <button
        className="filter btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </button>
    </div>
  );
};
export default Explore;
