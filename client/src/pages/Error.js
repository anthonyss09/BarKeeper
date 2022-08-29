import drunkPerson from "../assets/images/drunkPerson.jpg";
import Wrapper from "../assets/wrappers/Error";

export default function Error() {
  return (
    <Wrapper>
      <div className="container-main">
        <h1>404</h1>
        <img src={drunkPerson} />
        <h3>page not found</h3>
        <p>sorry, I looked everywhere...</p>
      </div>
    </Wrapper>
  );
}
