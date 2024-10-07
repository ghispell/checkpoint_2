import AddCountry from "@/components/AddCountry";
import CountryCard from "@/components/CountryCard";
import Header from "@/components/Header";
import { GET_ALL_COUNTRIES } from "@/graphql/queries";
import { Country } from "@/types";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries = data.countries;

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="py-4 bg-slate-200 w-1/2 border-slate-400 border">
          <AddCountry />
        </div>
      </div>

      <div className="flex gap-4 pt-10 justify-center">
        {countries.map((country: Country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </>
  );
}
