const Result = ({ computer, cstat, pstat }) => {
  return (
    <>
      <p className="resultTxt">{`Computer chose ${computer ? computer : ''} so ${cstat ? cstat : ''} and ${pstat ? pstat : ''}`}</p>
    </>
  );
};

export default Result
