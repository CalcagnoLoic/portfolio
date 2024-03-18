import picture from "../../../public/assets/img/photo.png";

const Component = () => (
  <div className="flex flex-col lg:flex-row">
    <article className="self-center">
      <h1>Welcome</h1>
      <h2>I am React and Python developer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsam
        amet sit obcaecati odit dolorum labore corrupti veritatis enim. Quam
        enim reprehenderit officia saepe vel esse optio explicabo vitae harum?
      </p>
    </article>
    <article className="">
      <img src={picture} alt="" className="mx-auto block w-1/2 rounded-full" />
    </article>
  </div>
);

export default Component