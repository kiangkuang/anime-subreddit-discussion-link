import { IProvider } from "./providers/IProvider";
import { hianime } from "./providers/hianime";
import { netflix } from "./providers/netflix";

const providers: IProvider[] = [hianime, netflix];

for (let provider of providers) {
  if (provider.isSite()) {
    provider.inject();
    break;
  }
}
