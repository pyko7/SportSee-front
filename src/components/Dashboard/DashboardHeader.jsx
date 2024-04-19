const DashboardHeader = ({ firstName }) => {
  return (
    <div className="title-subtitle-container">
      <p className="title">
        Bonjour <span>{firstName}</span>
      </p>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default DashboardHeader;
