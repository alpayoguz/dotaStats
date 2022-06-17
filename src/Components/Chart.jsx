import React, { useEffect, useState } from "react";
import "../Css/Chart.css";
// teams context
import { useTeams } from "../Contexts/TeamsContext";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import ChartRow from "./ChartRow";
import { teamsBaseURL } from "../Constants/imageBaseURL";

const Chart = () => {
  const { teams, setTeams } = useTeams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(teamsBaseURL)
      .then((response) => setTeams(response.data.slice(0, 50)))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="chart">
      <div className="chart__inner">
        {loading ? (
          <CircularProgress className="circular_progress" />
        ) : (
          <ul className="chart__list">
            {teams?.map((team, index) => (
                <ChartRow team={team} key={index + 1} index={index}/>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Chart;
