import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Items from "./SearchResults";
import { useEffect, useRef, useState } from "react";

export default function AlignItemsList({ results, setSymbol }) {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <div>
      <List sx={{ maxWidth: 200, bgcolor: "background.paper" }}>
        {results.map((item, index) => (
          <Items
            ticker={item.symbol}
            name={item.name}
            exchange={item.exchange}
            country={item.country}
            setSymbol={setSymbol}
          />
        ))}
      </List>
    </div>
  );
}
