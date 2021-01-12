import { ImCancelCircle } from "react-icons/im";
export const Modal = ({ Show, SetShowModal, Data }) => {
  return (
    <div
      className="ContainerModal"
      onClick={(e) => {
        if (e.target.classList.contains("ContainerModal")) {
          SetShowModal(!Show);
        }
      }}
    >
      <div className="Contenido">
        <h1>
          {Data.Title}
          <ImCancelCircle
            onClick={() => {
              SetShowModal(!Show);
            }}
            style={{ position: "absolute", right: "0", cursor: "pointer" }}
          />
        </h1>
        <div className="Container-Contenido-Data">
          <div>
            <strong>Tecnologías: {Data.Tecnologies}</strong>
            <p>{Data.Description}</p>
            <div>{Data.Links}</div>
          </div>
          <div>
            {Data.Imagen.map((I, Index) => {
              return <img key={Index} src={I.Image} />;
            })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .ContainerModal {
            position: fixed;
            z-index: 1;
            width: 100%;
            top: ${Show ? "0px" : "-100%"};
            opacity: ${Show ? "1" : "0"};
            left: 0px;
            height: 100%;
            background: ${Show && "rgba(0,0,0,.3)"};
            display: flex;
            justify-content: center;
            align-items: center;
            transition: top ease-in-out 1s, background ease-in-out 0.5s,
              opacity ease-in-out 1s;
            text-align: left;
          }
          .Contenido {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 800px;
            overflow: auto;
            margin: 15px;
            max-height: 95%;
          }
          .Container-Contenido-Data {
            padding: 5px;
          }
          .Container-Contenido-Data > div > div {
            margin-top: 10px;
          }

          p {
            text-align: left;
            margin-top: 10px;
          }
          h1 {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
            position: relative;
          }

          img {
            width: 100%;
            max-width: 400px;
          }
          @media (min-width: 1024px) {
            .Container-Contenido-Data {
              display: flex;
              flex-direction: row;
            }
            .Container-Contenido-Data > div {
              width: 50%;
            }
          }

          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }
          ::-webkit-scrollbar-thumb {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};
