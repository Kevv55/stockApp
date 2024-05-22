import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Fragment } from "react";

type Props = {
  ticker: string;
  name: string;
  exchange: string;
  country: string;
  setSymbol: (value: any) => void;
};

const getImage = async (ticker: string) => {
  const NINJA_URL = `https://api.api-ninjas.com/v1/logo?ticker=${ticker}`;
  try {
    const res = await fetch(NINJA_URL, {
      method: "GET",
      headers: {
        "X-Api-Key": "4ueq43ywLG94E/xlJFuvBA==Xjds6ZUvB3vjpzQ6",
      },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Failure: ", err);
  }
};

const Items = ({ ticker, name, exchange, country, setSymbol }: Props) => {
  const [image, setImage] = useState([]);
  // useEffect(() => {
  //   getImage(ticker).then((img) => setImage(img));
  // }, [ticker]);

  return (
    <ListItem
      alignItems="flex-start"
      onClick={() => {
        setSymbol(ticker);
      }}
      onFocus={() => {}}
    >
      {/* <ListItemAvatar>
        <Avatar alt={name} src={image} />
      </ListItemAvatar> */}
      <ListItemText primary={ticker} secondary={<Fragment>{name}</Fragment>} />
    </ListItem>
  );
};

export default Items;
