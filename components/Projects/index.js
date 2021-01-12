import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Modal } from "../Modal";
import { JsonData } from "../../Data/Proyectos";

export const Projects = () => {
  const [ShowModal, SetShowModal] = useState(false);
  const [IndexData, SetIndexData] = useState(0);
  return (
    <div className="Container">
      <div>
        <h1>Proyectos</h1>
        <div className="ContainerCards">
          {JsonData.map((Data, Index) => {
            return (
              <div
                onClick={() => {
                  SetShowModal(!ShowModal);
                  SetIndexData(Index);
                }}
                key={Index}
              >
                <h3>
                  {Data.Title}
                  <small>{Data.DescriptionShort}</small>
                </h3>
                <FcSearch
                  style={{
                    fontSize: "40px",
                    position: "absolute",
                    right: "10px",
                    top: "20px",
                  }}
                  className="Search"
                />
                {Data.Imagen.map((Images, Index) => {
                  return <img key={Index} src={Images.Image} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .Container {
          text-align: center;
          margin-top: 20px;
        }
        small {
          display: block;
          font-weight: 400;
        }
        h1 {
          padding: 20px;
          background: #000;
          color: #fff;
        }

        h3 {
          padding: 10px;
        }
        .ContainerCards {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .ContainerCards div {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          cursor: pointer;
          position: relative;
        }

        .ContainerCards div img {
          width: 100%;
        }

        @media (min-width: 1024px) {
          .ContainerCards div {
            max-width: 326.6px;
          }
        }
      `}</style>
      <Modal
        Show={ShowModal}
        SetShowModal={SetShowModal}
        Data={JsonData[IndexData]}
      />
    </div>
  );
};
