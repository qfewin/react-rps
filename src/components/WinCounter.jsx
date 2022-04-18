const WinCounter = ({ wincount, losscount, drawcount }) => {

  return (
    <>
      <p>{`Wins: ${wincount}`}</p>
      <p>{`Losses: ${losscount}`}</p>
      <p>{`Draws: ${drawcount}`}</p>
    </>
  );
};

export default WinCounter
