import { race } from "./controller/raceController.js";

class App {
  async run() {
    await race();
  }
}

export default App;
