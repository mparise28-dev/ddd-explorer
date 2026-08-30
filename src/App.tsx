import Input from "./components/Input";
import Output from "./components/Output";
import { DDDProvider } from "./providers/DDDProvider";

export default function App() {
  return (
    <div id="container">
      <DDDProvider>
        <Input />
        <Output />
      </DDDProvider>
    </div>
  );
}
