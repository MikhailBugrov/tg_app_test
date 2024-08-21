import { useEffect, useState } from "react";

interface CharacterData {
  results: { id: number; name: string }[];
}

const Character = () => {
  const [data, setData] = useState<CharacterData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  console.log("data", data);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const resData: CharacterData = await response.json();
        setData(resData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <div>
      {data && data.results.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};

export default Character;
