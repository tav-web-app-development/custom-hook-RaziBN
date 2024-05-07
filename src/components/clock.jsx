import UseTime from "../hooks/useTime";

const Clock = () => {
  const currentTime = UseTime();

  return (
    <div>
      <span>Current Time : {currentTime}</span>
    </div>
  );
};

export default Clock;
