import { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { NewsCard } from "./NewsCard";

export const News = () => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  console.log("Data", data);
  const handleData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${searchData}&token=615b05617863562d14a1ea401f0a3294`
      )
      .then((res) => {
        setData(res.data.articles);
      });
  };
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          width: "30%",
          margin: "auto",
          marginTop: "30px",
          borderRadius: "30px",
        }}
      >
        <TextField
          label="Search..."
          variant="standard"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <SearchIcon
          style={{ width: "50px", height: "50px", marginLeft: "10px" }}
          onClick={handleData}
        />
      </div>
      <div><NewsCard data= {data}/></div>
    </>
  );
};
