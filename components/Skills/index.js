export const Skills = () => {
  return (
    <div className="Container">
      <h1>Habilidades</h1>
      <div className="ContainerSkills">
        <div>
          <h3>Frontend</h3>
          <img src="/html.png" /> <img src="/css.png" />{" "}
          <img src="/archivo.png" /> <img src="/react.png" />{" "}
          <img src="/nextjs.jpeg" />
        </div>
        <div>
          <h3>Backend</h3>
          <img src="/nodejs.png" />
        </div>
        <div>
          <h3>Data Bases</h3>
          <img src="/mysql.png" />
          <img src="/sql.png" />
          <img src="/mongodb.png" />
          <img src="/sqlserver.png" />
        </div>
      </div>
      <style jsx>
        {`
          .Container {
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
          }
          .ContainerSkills {
            display: flex;
            flex-direction: row;
          }
          .ContainerSkills div {
            flex: 1 1 auto;
            text-align: center;
          }
          h1 {
            padding: 10px;
            border-bottom: 1px solid #ddd;
          }
          h3 {
            margin: 5px;
          }
          img {
            width: 60px;
          }
        `}
      </style>
    </div>
  );
};
