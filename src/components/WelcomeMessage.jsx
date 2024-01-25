const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">There are no Posts.</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            The biggest risk is not taking any risk... In a world that is
            changing really quickly, the only strategy that is guaranteed to
            fail is not taking risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
