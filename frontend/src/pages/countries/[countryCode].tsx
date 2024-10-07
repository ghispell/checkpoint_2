import Header from "@/components/Header";
import { GET_COUNTRY } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { countryCode } = router.query;
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code: countryCode },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <div className="text-9xl">{country.emoji}</div>
          <div>
            <p className="text-center">
              Name : {country.name} ({country.code})
            </p>
            {country.continent && (
              <p className="text-center">
                Continent : {country.continent.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
