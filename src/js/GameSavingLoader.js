import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const response = await json(data);
    return new GameSaving(JSON.parse(response));
  }
}
