import { IProvider } from "./providers/IProvider";
import { aniwave } from "./providers/aniwave";
import { netflix } from "./providers/netflix";

const providers: IProvider[] = [aniwave, netflix];

for (let provider of providers) {
  if (provider.isSite()) {
    provider.inject();
    break;
  }
}
