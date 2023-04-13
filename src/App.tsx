import { useEffect, useState } from "react";
interface Map {
  id: string;
  name: string;
}
function App() {
  const [maps, setMaps] = useState<Map[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("http://localhost:3001/maps");
      const res = await req.json();

      setMaps(res);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {maps.map((m) => {
        return <div key={m.id}>{m.name}</div>;
      })}
    </div>
  );
}

export default App;
