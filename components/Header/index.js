import { useEffect, useState } from "react";

export const Header = () => {
  const [Transition, SetTransition] = useState("-50");
  const [Visible, SetVisible] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      SetTransition("0");
      SetVisible("1");
    }, 500);
  }, []);

  return (
    <div className="Container">
      <img src="/Landing.jpg" />
      <div className="ContainerDescription">
        <div>
          <h1>Wilson Herney Castro Cabrera</h1>
          <h3>Desarrollador Full Stack Javascript</h3>
          <div>
            <a
              href="https://www.linkedin.com/in/wilson-herney-castro-cabrera-73560a19a/"
              target="_blank"
            >
              <img src="/linkedin.png" />
            </a>{" "}
            <a href="https://github.com/whccc" target="_blank">
              <img src="/github.png" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Container {
          width: 100%;
          height: calc(100vh - 50px);
          min-height: 500px;
          position: relative;
        }
        .Container > img {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ContainerDescription {
          position: absolute;
          top: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
          font-size: 25px;
          transition: all ease-in-out 0.1s;
        }
        .ContainerDescription > div {
          opacity: ${Visible};
          position: relative;
          top: ${Transition}px;
          transition: opacity ease-in-out 1s, top ease-in-out 1s;
        }
        .ContainerDescription img {
          margin-top: 5px;
          border: 1px solid #fff;
          background: #fff;
          width: 50px;
          border-radius: 100%;
        }
      `}</style>
    </div>
  );
};
