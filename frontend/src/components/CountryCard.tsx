import { Country } from "@/types";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Link href={`/countries/${country.code}`}>
      <Card
        sx={{
          border: "1px solid #c9c9c9",
          borderRadius: 0,
          width: 100,
          height: 80,
          textAlign: "center",
          backgroundColor: "#F5F5F5",
        }}
      >
        <CardContent>
          <p>{country.name}</p>
          <p className="text-xl">{country.emoji}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
export default CountryCard;
