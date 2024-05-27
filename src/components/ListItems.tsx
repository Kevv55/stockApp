import List from "@mui/material/List";
import Items from "./SearchResults";

type Props = {
  results: any;
  setSymbol: (value: any) => any;
};

export default function AlignItemsList({ results, setSymbol }: Props) {
  return (
    <div style={{ position: "fixed" }}>
      <List
        sx={{ maxWidth: 200, bgcolor: "background.paper", overflow: "visible" }}
      >
        {results.map((item: any) => (
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
